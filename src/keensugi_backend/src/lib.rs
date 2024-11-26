pub mod report;
pub mod report_storage;
pub mod report_handlers;

use ic_cdk_macros::*;
use crate::report_storage::add_report;
use crate::report::Report;
use candid::Nat;

#[init]
fn init() {
    // Initialize any state if necessary
    let initial_report = Report {
        id: Nat::from(1u64), // Use Nat for IDs.
        incident_type: "Sample Incident".to_string(),
        description: "This is a sample report.".to_string(),
        date: "2024-08-14".to_string(),
        location: "Nairobi, Kenya".to_string(),
        severity_level: "Medium".to_string(), // Example severity level (e.g., "Medium").
        evidence: vec!["https://example.com/evidence1.jpg".to_string()], // Example evidence.
    };

    add_report(initial_report);
}
