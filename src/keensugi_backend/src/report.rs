use serde::{Deserialize, Serialize};
use sha2::{Sha256, Digest};
use candid::{CandidType, Principal};
use std::time::{SystemTime, UNIX_EPOCH};

/// Struct representing a GBV report
#[derive(CandidType, Serialize, Deserialize,Clone, Debug)]
pub struct Report {
    pub incident_type: String,    // Type of incident (e.g., physical, emotional)
    pub description: String,      // Detailed description of the incident
    pub location: String,         // Location where the incident occurred
    pub date: u64,                // Timestamp of the report (in UNIX format)
    pub severity_level: String,   // Severity level (e.g., high, medium, low)
    pub evidence: Vec<String>,    // List of evidence (e.g., URLs, file hashes)
    pub reporter_id: Principal,   // Internet Identity of the reporter for anonymity
    pub hash: String,             // SHA-256 hash of the report data
}

impl Report {
    /// Creates a new report and generates a hash for data integrity
    pub fn new(
        incident_type: String,
        description: String,
        location: String,
        severity_level: String,
        evidence: Vec<String>,
        reporter_id: Principal,
    ) -> Self {
        // Safely capture the current timestamp or fallback to 0
        let date = SystemTime::now()
            .duration_since(UNIX_EPOCH)
            .unwrap_or_else(|_| {
                ic_cdk::println!("SystemTime::now failed, using fallback timestamp.");
                std::time::Duration::from_secs(0)
            })
            .as_secs();

        // Create the report instance
        let mut report = Self {
            incident_type,
            description,
            location,
            date,
            severity_level,
            evidence,
            reporter_id,
            hash: String::new(), // Placeholder for the hash
        };

        // Generate the hash for the report
        report.hash = report.generate_hash();

        report
    }

    /// Generates a SHA-256 hash for the report's data
    fn generate_hash(&self) -> String {
        let report_data = format!(
            "{}|{}|{}|{}|{}|{:?}|{}",
            self.incident_type,
            self.description,
            self.location,
            self.date,
            self.severity_level,
            self.evidence,
            self.reporter_id.to_text()
        );

        let mut hasher = Sha256::new();
        hasher.update(report_data);
        format!("{:x}", hasher.finalize())
    }
}
