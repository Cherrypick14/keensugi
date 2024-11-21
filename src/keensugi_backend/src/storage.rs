use crate::models::{Report, Role};
use candid::Nat;
use std::collections::BTreeMap;
use std::cell::RefCell;

/// Thread-local storage for safe concurrent access
thread_local! {
    pub static STORAGE: RefCell<Option<Storage>> = RefCell::new(None);
}

/// Storage struct for managing reports and users
pub struct Storage {
    pub reports: BTreeMap<Nat, Report>,
    pub users: BTreeMap<String, Role>,
    pub next_report_id: Nat,
}

impl Storage {
    pub fn new() -> Self {
        Self {
            reports: BTreeMap::new(),
            users: BTreeMap::new(),
            next_report_id: Nat::from(1u32),
        }
    }

    pub fn add_user(&mut self, principal: String, role: Role) {
        self.users.insert(principal, role);
    }

    pub fn get_user(&self, principal: &String) -> Option<&Role> {
        self.users.get(principal)
    }

    pub fn add_report(&mut self, mut report: Report) {
        report.id = self.next_report_id.clone();
        self.reports.insert(report.id.clone(), report);
        self.next_report_id += Nat::from(1u32);
    }

    pub fn get_report(&self, id: &Nat) -> Option<&Report> {
        self.reports.get(id)
    }

    pub fn update_report(&mut self, id: &Nat, updated_report: Report) {
        self.reports.insert(id.clone(), updated_report);
    }

    pub fn delete_report(&mut self, id: &Nat) {
        self.reports.remove(id);
    }
}

/// Initialize the storage
pub fn init_storage() {
    STORAGE.with(|s| {
        *s.borrow_mut() = Some(Storage::new());
    });
}

/// Access storage with a provided function
pub fn with_storage<F, R>(f: F) -> R
where
    F: FnOnce(&mut Storage) -> R,
{
    STORAGE.with(|s| {
        let mut storage = s.borrow_mut();
        let storage = storage.as_mut().expect("Storage not initialized.");
        f(storage)
    })
}
