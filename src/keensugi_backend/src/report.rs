use serde::{Deserialize, Serialize};
use candid::CandidType;
use candid::Nat;

#[derive(Serialize, Deserialize, Clone, CandidType)]
pub struct Report {
    pub id: Nat,                 // Unique identifier for the report.
    pub incident_type: String,   // Type of incident reported.
    pub description: String,     // Description of the incident.
    pub date: String,            // Date of the incident.
    pub location: String,        // Location of the incident.
    pub severity_level: String,  // Severity level (e.g., "High", "Medium", "Low").
    pub evidence: Vec<String>,   // List of evidence items (e.g., URLs or descriptions).
}
