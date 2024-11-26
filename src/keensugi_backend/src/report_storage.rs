use std::cell::RefCell;
use crate::report::Report;
use candid::Nat;

thread_local! {
    pub static REPORTS: RefCell<Vec<Report>> = RefCell::new(Vec::new());
}

// Function to add a report
pub fn add_report(mut report: Report) -> Nat {
    REPORTS.with(|reports| {
        let mut reports = reports.borrow_mut();
        report.id = Nat::from(reports.len() as u64 + 1); // Assign a unique ID as Nat.
        reports.push(report.clone());
        report.id
    })
}

// Function to get a report by ID
pub fn get_report(id: Nat) -> Option<Report> {
    REPORTS.with(|reports| {
        reports
            .borrow()
            .iter()
            .find(|r| r.id == id)
            .cloned()
    })
}

// Function to fetch all reports
pub fn fetch_reports() -> Vec<Report> {
    REPORTS.with(|reports| reports.borrow().clone())
}

// Function to update a report
pub fn update_report(
    id: Nat,
    incident_type: String,
    description: String,
    date: String,
    location: String,
    severity_level: String, // Update severity level.
    evidence: Vec<String>,  // Include evidence in updates.
) -> bool {
    let mut updated = false;
    REPORTS.with(|reports| {
        let mut reports = reports.borrow_mut();
        if let Some(report) = reports.iter_mut().find(|r| r.id == id) {
            report.incident_type = incident_type;
            report.description = description;
            report.date = date;
            report.location = location;
            report.severity_level = severity_level;
            report.evidence = evidence;
            updated = true;
        }
    });
    updated
}

// Function to delete a report
pub fn delete_report(id: Nat) -> bool {
    let mut deleted = false;
    REPORTS.with(|reports| {
        let mut reports = reports.borrow_mut();
        if let Some(pos) = reports.iter().position(|r| r.id == id) {
            reports.remove(pos);
            deleted = true;
        }
    });
    deleted
}
