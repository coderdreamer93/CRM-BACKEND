const express = require("express");
const router = express.Router();

// Controllers import karen
const contactController = require("../controller/ContactManagementController");
const leadController = require("../controller/LeadManagementController");

// ----- Contacts Routes -----
// Naya contact create karne ka route
router.post("/contacts", contactController.createContact);
// Sare contacts retrieve karne ka route
router.get("/contacts", contactController.getContacts);

// ----- Leads Routes -----
// Naya lead create karne ka route
router.post("/leads", leadController.createLead);
// Sare leads retrieve karne ka route
router.get("/leads", leadController.getLeads);
router.get("/leads/:id", leadController.getLeadById); // Get Single Lead
router.put("/leads/:id", leadController.updateLead); // Update Lead
router.delete("/leads/:id", leadController.deleteLead); // Delete Lead
module.exports = router;
