mod handlers;
mod storage;
mod models;

use crate::handlers::{create_report, update_report_status, delete_report};
use crate::storage::init_storage;
use crate::models::ReportStatus;
use candid::Nat;
use ic_cdk_macros::{init, update};

/// Initialize storage at canister startup
#[init]
fn init() {
    init_storage();
}

/// Create a new report
#[update]
fn create_report_handler(
    reporter: String,
    incident_type: String,
    description: String,
    location: String,
    date_occurred: Nat,
    severity: Option<String>,
    evidence: Vec<String>,
    created_at: Nat,
) -> Result<Nat, String> {
    create_report(
        reporter,
        incident_type,
        description,
        location,
        date_occurred,
        severity,
        evidence,
        created_at,
    )
}

/// Update the status of a report
#[update]
fn update_report_status_handler(report_id: Nat, status: ReportStatus) -> Result<(), String> {
    update_report_status(report_id, status)
}

/// Delete a report
#[update]
fn delete_report_handler(report_id: Nat) -> Result<(), String> {
    delete_report(report_id)
}
