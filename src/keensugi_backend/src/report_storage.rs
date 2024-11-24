use std::collections::HashMap;
use std::sync::RwLock;
// use candid::Principal;
use crate::report::Report;

/// Struct to handle storage of reports
#[derive(Debug)]
pub struct ReportStorage {
    reports: RwLock<HashMap<String, Report>>, // In-memory storage for reports
}

impl ReportStorage {
    /// Creates a new `ReportStorage` instance
    pub fn new() -> Self {
        Self {
            reports: RwLock::new(HashMap::new()),
        }
    }

    /// Adds a new report to the storage
    pub fn add_report(&self, report: Report) -> Result<(), String> {
        let hash = report.hash.clone();
        let mut storage = self.reports.write().map_err(|_| "Storage lock error")?;
        
        if storage.contains_key(&hash) {
            Err("Report with the same hash already exists.".to_string())
        } else {
            storage.insert(hash, report);
            Ok(())
        }
    }

    /// Retrieves a report by its hash
    pub fn get_report(&self, hash: &str) -> Option<Report> {
        let storage = self.reports.read().ok()?;
        storage.get(hash).cloned()
    }

    /// Updates an existing report
    pub fn update_report(&self, hash: &str, updated_report: Report) -> Result<(), String> {
        let mut storage = self.reports.write().map_err(|_| "Storage lock error")?;
        
        if storage.contains_key(hash) {
            storage.insert(hash.to_string(), updated_report);
            Ok(())
        } else {
            Err("Report not found.".to_string())
        }
    }

    /// Deletes a report by its hash
    pub fn delete_report(&self, hash: &str) -> Result<(), String> {
        let mut storage = self.reports.write().map_err(|_| "Storage lock error")?;
        
        if storage.remove(hash).is_some() {
            Ok(())
        } else {
            Err("Report not found.".to_string())
        }
    }

    /// Lists all stored reports
    pub fn list_reports(&self) -> Vec<Report> {
        let storage = self.reports.read().expect("Storage lock error");
        storage.values().cloned().collect()
    }
}

