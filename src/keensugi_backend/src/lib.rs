pub mod report_handlers;
pub mod p2p_handlers;
pub mod donation_handler;
pub mod donation;
pub mod p2p;
pub mod report;
pub mod donation_storage;
pub mod p2p_storage;
pub mod report_storage;

use ic_cdk_macros::*;
use report_handlers::{Handler, ReportInput};
use std::sync::RwLock;
use lazy_static::lazy_static;

lazy_static! {
    /// Thread-safe global handler instance for managing reports
    static ref REPORT_HANDLER: RwLock<Option<Handler>> = RwLock::new(None);
}

/// Initialize all handlers on canister startup
#[init]
fn init() {
    let mut handler = REPORT_HANDLER.write().expect("Failed to acquire write lock");
    if handler.is_none() {
        *handler = Some(Handler::new());
        ic_cdk::println!("Report Handler successfully initialized.");
    } else {
        ic_cdk::println!("Report Handler is already initialized.");
    }
}

/// Create a new report
#[update]
fn create_report(input: ReportInput) -> Result<String, String> {
    let reporter_id = ic_cdk::caller();
    let handler = REPORT_HANDLER.read().expect("Failed to acquire read lock");

    if let Some(handler) = handler.as_ref() {
        handler.create_report(input, reporter_id)
    } else {
        ic_cdk::println!("Error: Report Handler not initialized.");
        Err("Report Handler is not initialized.".to_string())
    }
}

/// Retrieve a report by hash
#[query]
fn get_report(hash: String) -> Result<report_handlers::Report, String> {
    let handler = REPORT_HANDLER.read().expect("Failed to acquire read lock");

    if let Some(handler) = handler.as_ref() {
        handler.get_report(&hash)
    } else {
        ic_cdk::println!("Error: Report Handler not initialized.");
        Err("Report Handler is not initialized.".to_string())
    }
}

/// Update an existing report
#[update]
fn update_report(hash: String, input: ReportInput) -> Result<(), String> {
    let reporter_id = ic_cdk::caller();
    let handler = REPORT_HANDLER.read().expect("Failed to acquire read lock");

    if let Some(handler) = handler.as_ref() {
        handler.update_report(&hash, input, reporter_id)
    } else {
        ic_cdk::println!("Error: Report Handler not initialized.");
        Err("Report Handler is not initialized.".to_string())
    }
}

/// Delete a report
#[update]
fn delete_report(hash: String) -> Result<(), String> {
    let reporter_id = ic_cdk::caller();
    let handler = REPORT_HANDLER.read().expect("Failed to acquire read lock");

    if let Some(handler) = handler.as_ref() {
        handler.delete_report(&hash, reporter_id)
    } else {
        ic_cdk::println!("Error: Report Handler not initialized.");
        Err("Report Handler is not initialized.".to_string())
    }
}

/// List all reports (admin-only)
#[query]
fn list_reports() -> Result<Vec<report_handlers::Report>, String> {
    let caller = ic_cdk::caller();
    let handler = REPORT_HANDLER.read().expect("Failed to acquire read lock");

    if let Some(handler) = handler.as_ref() {
        handler.list_reports(caller)
    } else {
        ic_cdk::println!("Error: Report Handler not initialized.");
        Err("Report Handler is not initialized.".to_string())
    }
}
