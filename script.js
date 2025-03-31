//Add Pages Checkbox Functionality (Extras)
document.addEventListener("DOMContentLoaded", function () {
    const selectAllCheckbox = document.querySelector(".allPages"); // "All Pages" checkbox
    const pageCheckboxes = document.querySelectorAll(".Pages"); // All individual checkboxes
    // When "All Pages" checkbox is clicked
    selectAllCheckbox.addEventListener("change", function () {
        pageCheckboxes.forEach(checkbox => {
            checkbox.checked = selectAllCheckbox.checked;
        });
    });
    // When any individual checkbox is clicked
    pageCheckboxes.forEach(checkbox => {
        checkbox.addEventListener("change", function () {
            // If all checkboxes are checked, check "All Pages"
            // If any is unchecked, uncheck "All Pages"
            selectAllCheckbox.checked = [...pageCheckboxes].every(cb => cb.checked);
        });
    });
    // When Done Button is clicked the widget clears.
    const doneButton = document.querySelector(".done-container");
    doneButton.addEventListener("click", () => {
        pageCheckboxes.forEach(cb => cb.checked = false);
        selectAllCheckbox.checked = false;
    });
});

