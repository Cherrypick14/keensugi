use candid::{CandidType, Principal};
use serde::Deserialize;
use crate::report_storage::ReportStorage;

pub use crate::report::Report;

#[derive(Debug)]
pub struct Handler {
    storage: ReportStorage,
}

#[derive(CandidType, Deserialize, Debug)]
pub struct ReportInput {
    pub incident_type: String,
    pub description: String,
    pub location: String,
    pub severity_level: String,
    pub evidence: Vec<String>,
}

impl Handler {
    /// Creates a new handler instance
    pub fn new() -> Self {
        Self {
            storage: ReportStorage::new(),
        }
    }

    pub fn create_report(&self, input: ReportInput, reporter_id: Principal) -> Result<String, String> {
        // Safeguard against potential panics during report creation
        let report = Report::new(
            input.incident_type,
            input.description,
            input.location,
            input.severity_level,
            input.evidence,
            reporter_id,
        );
    
        // Log the hash to ensure it's unique
        ic_cdk::println!("Attempting to store report with hash: {}", report.hash);
    
        // Add the report to storage
        match self.storage.add_report(report.clone()) {
            Ok(_) => Ok(report.hash),
            Err(err) => {
                ic_cdk::println!("Failed to store the report in storage. Error: {}", err);
                Err("Failed to store the report.".to_string())
            }
        }
    }
    
    
    /// Fetches a report by its hash
    pub fn get_report(&self, hash: &str) -> Result<Report, String> {
        self.storage
            .get_report(hash)
            .ok_or_else(|| "Report not found.".to_string())
    }

    /// Updates an existing report
    pub fn update_report(
        &self,
        hash: &str,
        input: ReportInput,
        reporter_id: Principal,
    ) -> Result<(), String> {
        let existing_report = self
            .get_report(hash)
            .map_err(|_| "Cannot update: Report does not exist.")?;

        if existing_report.reporter_id != reporter_id {
            return Err("Permission denied: Cannot update a report you did not create.".to_string());
        }

        let updated_report = Report::new(
            input.incident_type,
            input.description,
            input.location,
            input.severity_level,
            input.evidence,
            reporter_id,
        );

        self.storage.update_report(hash, updated_report)
    }

    /// Deletes a report by its hash
    pub fn delete_report(&self, hash: &str, reporter_id: Principal) -> Result<(), String> {
        let existing_report = self
            .get_report(hash)
            .map_err(|_| "Cannot delete: Report does not exist.")?;

        if existing_report.reporter_id != reporter_id {
            return Err("Permission denied: Cannot delete a report you did not create.".to_string());
        }

        self.storage.delete_report(hash)
    }

    /// Lists all reports (admin access only)
    pub fn list_reports(&self, caller: Principal) -> Result<Vec<Report>, String> {
        if caller == Principal::anonymous() {
            // Handle anonymous caller
            return Err("Access denied: Anonymous caller".to_string());
        }

        Ok(self.storage.list_reports())
    }
}
