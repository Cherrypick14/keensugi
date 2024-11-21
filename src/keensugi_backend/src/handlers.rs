use crate::storage::{Storage, with_storage};
use crate::models::{Report, ReportStatus};
use candid::Nat;
use sha2::{Digest, Sha256};

/// Creates a new report with anonymized reporter and hashed description
pub fn create_report(
    reporter: String,
    incident_type: String,
    description: String,
    location: String,
    date_occurred: Nat,
    severity: Option<String>,
    evidence: Vec<String>,
    created_at: Nat,
) -> Result<Nat, String> {
    with_storage(|storage| {
        let hashed_reporter = format!("{:x}", Sha256::digest(reporter.as_bytes()));
        let hashed_description = format!("{:x}", Sha256::digest(description.as_bytes()));

        let report_id = storage.next_report_id.clone();
        let report = Report {
            id: report_id.clone(),
            reporter: hashed_reporter,
            incident_type,
            description: hashed_description,
            location,
            date_occurred,
            severity,
            evidence,
            status: ReportStatus::Pending,
            created_at,
        };
        storage.add_report(report);
        Ok(report_id)
    })
}

/// Updates the status of an existing report
pub fn update_report_status(report_id: Nat, status: ReportStatus) -> Result<(), String> {
    with_storage(|storage| {
        if let Some(report) = storage.reports.get_mut(&report_id) {
            report.status = status;
            Ok(())
        } else {
            Err("Report not found.".to_string())
        }
    })
}

/// Deletes an existing report by ID
pub fn delete_report(report_id: Nat) -> Result<(), String> {
    with_storage(|storage| {
        storage.delete_report(&report_id);
        Ok(())
    })
}
