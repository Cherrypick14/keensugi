use crate::report::Report;
use crate::report_storage::{add_report, fetch_reports, get_report};
use crate::report_storage::{update_report as storage_update_report, delete_report as storage_delete_report};
use candid::Nat;
use ic_cdk_macros::*;

#[update]
fn create_report(
    incident_type: String,
    description: String,
    date: String,
    location: String,
    evidence: Vec<String>,      // Evidence parameter.
    severity_level: String,     // Severity level (e.g., "High", "Medium", "Low").
) -> Nat {
    let report = Report {
        id: Nat::from(0u64), // Placeholder ID; storage assigns the actual ID.
        incident_type,
        description,
        date,
        location,
        severity_level, // Use severity level instead of status.
        evidence,
    };
    add_report(report)
}

#[query]
fn get_report_handler(id: Nat) -> Option<Report> {
    get_report(id)
}

#[query]
fn fetch_reports_handler() -> Vec<Report> {
    fetch_reports()
}

#[update]
fn update_report(
    id: Nat,
    incident_type: String,
    description: String,
    date: String,
    location: String,
    severity_level: String, // Update severity level.
    evidence: Vec<String>,  // Include evidence in updates.
) -> Result<(), String> {
    if storage_update_report(id, incident_type, description, date, location, severity_level, evidence) {
        Ok(())
    } else {
        Err("Failed to update report".into())
    }
}

#[update]
fn delete_report(id: Nat) -> Result<(), String> {
    if storage_delete_report(id) {
        Ok(())
    } else {
        Err("Failed to delete report".into())
    }
}
