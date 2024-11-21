use candid::{CandidType, Deserialize, Nat};
use serde::Serialize;

#[derive(CandidType, Deserialize, Serialize, Debug, Clone)]
pub struct Report {
    pub id: Nat,
    pub reporter: String,      // Anonymized Internet Identity principal
    pub incident_type: String,
    pub description: String,   // Hashed description
    pub location: String,
    pub date_occurred: Nat,
    pub severity: Option<String>,
    pub evidence: Vec<String>,
    pub status: ReportStatus,
    pub created_at: Nat,
}

#[derive(CandidType, Deserialize, Serialize, Debug, Clone)]
pub enum ReportStatus {
    Pending,
    InProgress,
    Resolved,
}

#[derive(CandidType, Deserialize, Serialize, Debug, Clone, PartialEq, Eq)]
pub enum Role {
    User,
    Admin,
}
