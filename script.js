document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // REGISTRATION COUNTERS
    // =========================

    let registeredStudents =
        Number(localStorage.getItem("registeredStudents")) || 0;

    let webCraftCount =
        Number(localStorage.getItem("webCraftCount")) || 0;

    let quizCount =
        Number(localStorage.getItem("quizCount")) || 0;

    let culturalCount =
        Number(localStorage.getItem("culturalCount")) || 0;


    // =========================
    // UPDATE DASHBOARD
    // =========================

    function updateDashboard() {

        document.getElementById("studentCount").textContent =
            registeredStudents;

        document.getElementById("adminTotal").textContent =
            registeredStudents;

        document.getElementById("webCraftCount").textContent =
            webCraftCount;

        document.getElementById("quizCount").textContent =
            quizCount;

        document.getElementById("culturalCount").textContent =
            culturalCount;
    }


    // =========================
    // SCROLL TO EVENTS
    // =========================

    window.scrollToEvents = function () {

        document.getElementById("events").scrollIntoView({
            behavior: "smooth"
        });

    };


    // =========================
    // SCROLL TO REGISTER
    // =========================

    window.scrollToRegister = function () {

        document.getElementById("register").scrollIntoView({
            behavior: "smooth"
        });

    };


    // =========================
    // SELECT EVENT
    // =========================

    window.selectEvent = function (eventName) {

        document.getElementById("event").value = eventName;

        document.getElementById("register").scrollIntoView({
            behavior: "smooth"
        });

    };


    // =========================
    // CLOSE WELCOME POPUP
    // =========================

    window.closePopup = function () {

        document.getElementById("welcomePopup").style.display = "none";

    };


    // =========================
    // SUCCESS POPUP
    // =========================

    function showSuccessMessage(name, eventName) {

        let message = document.createElement("div");

        message.className = "success-popup";

        message.innerHTML = `
            <div class="success-icon">✓</div>

            <div>
                <strong>Registration Successful!</strong>

                <p>
                    ${name}, you are registered for
                    <b>${eventName}</b>.
                </p>
            </div>

            <button onclick="this.parentElement.remove()">×</button>
        `;

        document.body.appendChild(message);

        setTimeout(function () {

            if (message.parentElement) {
                message.remove();
            }

        }, 5000);
    }


    // =========================
    // REGISTRATION FORM
    // =========================

    document
        .getElementById("registrationForm")
        .addEventListener("submit", function (event) {

            event.preventDefault();


            // Get form values

            let name =
                document.getElementById("name").value.trim();

            let email =
                document.getElementById("email").value.trim();

            let department =
                document.getElementById("department").value;

            let selectedEvent =
                document.getElementById("event").value;


            // =========================
            // VALIDATION
            // =========================

            if (name === "") {
                alert("Please enter your name.");
                return;
            }

            if (email === "") {
                alert("Please enter your email.");
                return;
            }

            if (department === "") {
                alert("Please select your department.");
                return;
            }

            if (selectedEvent === "") {
                alert("Please select an event.");
                return;
            }


            // =========================
            // TOTAL REGISTRATION
            // =========================

            registeredStudents++;

            localStorage.setItem(
                "registeredStudents",
                registeredStudents
            );


            // =========================
            // EVENT REGISTRATION
            // =========================

            if (selectedEvent === "Web Craft") {

                webCraftCount++;

                localStorage.setItem(
                    "webCraftCount",
                    webCraftCount
                );

            }

            else if (selectedEvent === "Tech Quiz") {

                quizCount++;

                localStorage.setItem(
                    "quizCount",
                    quizCount
                );

            }

            else if (selectedEvent === "Cultural Fest") {

                culturalCount++;

                localStorage.setItem(
                    "culturalCount",
                    culturalCount
                );

            }


            // =========================
            // UPDATE DASHBOARD
            // =========================

            updateDashboard();


            // =========================
            // SUCCESS MESSAGE
            // =========================

            showSuccessMessage(
                name,
                selectedEvent
            );


            // =========================
            // CLEAR FORM
            // =========================

            document
                .getElementById("registrationForm")
                .reset();

        });


    // Load existing numbers

    updateDashboard();

});