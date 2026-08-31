// ---------------------------------------------------------------
// Destination data
// Costs are per person, in INR, built from four line items:
// transport (round trip from Vijayawada), stay per night,
// food per day, and a flat activities/entry-fee allowance.
// ---------------------------------------------------------------

const destinations = [
    {
        id: "araku",
        name: "Araku Valley",
        region: "Visakhapatnam district — 5 hrs by road, or the Kirandul line",
        tags: ["nature", "food", "culture"],
        transport: 1100,
        stay: 1400,
        food: 500,
        activities: 600,
        minDays: 2,
        maxDays: 4,
        blurb: "Coffee estates cut into the Eastern Ghats, a tribal museum, and a train that climbs through 58 tunnels to get there.",
        highlightPool: [
            "Ride the Kirandul line through Borra Caves",
            "Walk the tribal museum's dioramas",
            "Taste single-estate coffee at a hillside plantation",
            "Hike down to Katiki waterfall before the afternoon crowd",
            "Browse the tribal haat if the weekend lines up",
            "Slow morning at the guesthouse — the valley is worth sitting still in"
        ]
    },
    {
        id: "gandikota",
        name: "Gandikota",
        region: "Kadapa district — 4 hrs by road",
        tags: ["adventure", "nature"],
        transport: 900,
        stay: 1200,
        food: 450,
        activities: 500,
        minDays: 1,
        maxDays: 2,
        blurb: "A gorge on the Pennar deep enough that people call it the Grand Canyon of India, with a ruined fort along the rim.",
        highlightPool: [
            "Watch sunrise over the gorge from the fort ramparts",
            "Explore the Jama Masjid and Madhavaraya temple inside the fort",
            "Raft a calm stretch of the Pennar, season permitting",
            "Camp at the canyon edge under a clear sky"
        ]
    },
    {
        id: "lambasingi",
        name: "Lambasingi",
        region: "Visakhapatnam district — 6 hrs by road, often paired with Araku",
        tags: ["nature", "peaceful"],
        transport: 1300,
        stay: 1600,
        food: 500,
        activities: 300,
        minDays: 2,
        maxDays: 3,
        blurb: "A hill village cold enough in December to see frost on the coffee terraces — the closest Andhra gets to a mountain town.",
        highlightPool: [
            "Catch the pre-dawn mist over the coffee terraces",
            "Walk the apple orchards planted here as a 1990s experiment",
            "Short trek to the Thajangi reservoir viewpoint",
            "Sit by a bonfire once the temperature drops after sunset"
        ]
    },
    {
        id: "papikondalu",
        name: "Papikondalu",
        region: "East Godavari — boat from Rajahmundry, 2.5 hrs from Vijayawada",
        tags: ["nature", "adventure"],
        transport: 1800,
        stay: 1500,
        food: 550,
        activities: 200,
        minDays: 1,
        maxDays: 2,
        blurb: "A full-day cruise through a river gorge on the Godavari, with a tribal-village lunch stop along the way.",
        highlightPool: [
            "Full-day cruise through the Papikondalu gorge",
            "Lunch stop at a Konda Reddi village on the riverbank",
            "Pass Kolluru's rubber plantations by boat",
            "Evening at a riverside eco-camp"
        ]
    },
    {
        id: "amaravati-undavalli",
        name: "Amaravati & Undavalli",
        region: "Guntur district — 30 to 45 minutes from Vijayawada",
        tags: ["culture", "peaceful"],
        transport: 300,
        stay: 900,
        food: 350,
        activities: 350,
        minDays: 1,
        maxDays: 2,
        blurb: "A close-in pairing of the 4th-century Undavalli caves and the Amaravati stupa site, easy to do without much travel time.",
        highlightPool: [
            "Explore the rock-cut Vishnu shrine at Undavalli",
            "Walk the Amaravati stupa complex and site museum",
            "Evening boat ride on the Krishna near the ghat",
            "Mirchi bajji from a roadside stall on the way back"
        ]
    },
    {
        id: "srisailam",
        name: "Srisailam",
        region: "Nallamala forest, Kurnool district — 4.5 hrs by road",
        tags: ["culture", "peaceful"],
        transport: 1000,
        stay: 1000,
        food: 400,
        activities: 400,
        minDays: 1,
        maxDays: 3,
        blurb: "A temple town wedged inside a tiger reserve, with a dam viewpoint that empties out well after the pilgrim crowds do.",
        highlightPool: [
            "Darshan at the Mallikarjuna Jyotirlinga temple",
            "Sunset at the Srisailam dam viewpoint",
            "Drive through the Nallamala buffer zone",
            "Short trek to the Akka Mahadevi caves"
        ]
    },
    {
        id: "rushikonda",
        name: "Rushikonda, Vizag",
        region: "Visakhapatnam — 4.5 hrs by road or an overnight train",
        tags: ["beaches", "adventure"],
        transport: 1400,
        stay: 1800,
        food: 600,
        activities: 700,
        minDays: 2,
        maxDays: 4,
        blurb: "The cleanest working beach on this stretch of coast, with a submarine museum and enough water sports to fill a spare afternoon.",
        highlightPool: [
            "Morning on Rushikonda beach before the day-trippers arrive",
            "Tour the INS Kursura submarine museum",
            "Parasailing or jet-skiing session at Rushikonda",
            "Sunset walk along the RK Beach promenade"
        ]
    },
    {
        id: "borra",
        name: "Borra Caves",
        region: "Ananthagiri hills — 4.5 hrs by road, en route to Araku",
        tags: ["nature", "adventure"],
        transport: 1100,
        stay: 1300,
        food: 450,
        activities: 400,
        minDays: 1,
        maxDays: 2,
        blurb: "Million-year-old limestone caverns you descend into on foot, with a coffee-estate trail nearby if you have a second day.",
        highlightPool: [
            "Descend into the limestone caverns",
            "Walk the Ananthagiri coffee estate trail",
            "Photograph the valley from the Tyda viewpoint",
            "Try bamboo chicken cooked roadside"
        ]
    },
    {
        id: "konaseema",
        name: "Konaseema backwaters",
        region: "East Godavari delta — 3 hrs by road",
        tags: ["peaceful", "nature"],
        transport: 1200,
        stay: 1700,
        food: 550,
        activities: 300,
        minDays: 2,
        maxDays: 3,
        blurb: "A houseboat through the Godavari delta's canals, past coconut groves and a mangrove patch near Yanam.",
        highlightPool: [
            "Overnight on a houseboat through the delta canals",
            "Visit a jaggery and coir-making unit in a delta village",
            "Row through the mangrove patch near Yanam",
            "Temple stop at Draksharamam on the way back"
        ]
    },
    {
        id: "kondapalli",
        name: "Kondapalli Fort",
        region: "Krishna district — 25 minutes from Vijayawada",
        tags: ["culture"],
        transport: 200,
        stay: 0,
        food: 250,
        activities: 250,
        minDays: 1,
        maxDays: 1,
        blurb: "A hillside fort a short auto ride out of the city, best paired with a toy-making workshop on the way down.",
        highlightPool: [
            "Climb Kondapalli Fort for a Krishna valley view",
            "Watch a Kondapalli toy-making demonstration",
            "Back in the city by early evening"
        ]
    }
];

// ---------------------------------------------------------------
// State
// ---------------------------------------------------------------

const state = {
    budget: 5000,
    duration: 2,
    travelers: 2,
    interests: new Set(["nature", "food"])
};

let currentMatches = [];
let openItineraryId = null;

// ---------------------------------------------------------------
// Cost + scoring
// ---------------------------------------------------------------

function costFor(dest, duration, travelers) {
    const nights = Math.max(duration - 1, 0);
    const stayRate = travelers >= 3 ? dest.stay * 0.85 : dest.stay; // shared-room saving
    const total = dest.transport + stayRate * nights + dest.food * duration + dest.activities;
    return {
        transport: dest.transport,
        stay: Math.round(stayRate * nights),
        food: dest.food * duration,
        activities: dest.activities,
        total: Math.round(total)
    };
}

function scoreDestination(dest, { budget, duration, interests }) {
    const cost = costFor(dest, duration, state.travelers);

    // Budget fit
    let budgetScore;
    if (cost.total <= budget) {
        budgetScore = 1;
    } else {
        const overshoot = (cost.total - budget) / budget;
        budgetScore = Math.max(0, 1 - overshoot * 1.4);
    }

    // Interest overlap
    let interestScore = 0.5;
    if (interests.size > 0) {
        const matched = dest.tags.filter((t) => interests.has(t)).length;
        const vsSelected = matched / interests.size;
        const vsDestTags = matched / dest.tags.length;
        interestScore = matched === 0 ? 0.1 : (vsSelected + vsDestTags) / 2;
    }

    // Duration fit
    let durationScore;
    if (duration >= dest.minDays && duration <= dest.maxDays) {
        durationScore = 1;
    } else {
        const dist = Math.min(Math.abs(duration - dest.minDays), Math.abs(duration - dest.maxDays));
        durationScore = Math.max(0, 1 - dist * 0.22);
    }

    const raw = interestScore * 0.45 + budgetScore * 0.35 + durationScore * 0.2;
    const percent = Math.min(97, Math.max(8, Math.round(raw * 100)));

    return { cost, percent, matchedTags: dest.tags.filter((t) => interests.has(t)) };
}

function computeMatches() {
    return destinations
        .map((dest) => {
            const { cost, percent, matchedTags } = scoreDestination(dest, state);
            return { dest, cost, percent, matchedTags };
        })
        .sort((a, b) => b.percent - a.percent);
}

// ---------------------------------------------------------------
// Rendering
// ---------------------------------------------------------------

const el = {
    budgetSlider: document.getElementById("budget"),
    budgetDisplay: document.getElementById("budget-display"),
    heroBudget: document.getElementById("hero-budget"),
    heroCount: document.getElementById("hero-count"),
    heroFill: document.getElementById("hero-fill"),
    heroCaption: document.getElementById("hero-caption"),
    durationGroup: document.getElementById("duration-group"),
    travelersCount: document.getElementById("travelers-count"),
    travelersMinus: document.getElementById("travelers-minus"),
    travelersPlus: document.getElementById("travelers-plus"),
    interestGroup: document.getElementById("interest-group"),
    createTrip: document.getElementById("create-trip"),
    message: document.getElementById("message"),
    resultsHeading: document.getElementById("results-heading"),
    resultsBadge: document.getElementById("results-count-badge"),
    list: document.getElementById("destination-list"),
    itinerary: document.getElementById("itinerary"),
    itineraryEyebrow: document.getElementById("itinerary-eyebrow"),
    itineraryTitle: document.getElementById("itinerary-title"),
    itineraryDays: document.getElementById("itinerary-days"),
    costRows: document.getElementById("cost-rows"),
    costTotal: document.getElementById("cost-total-value"),
    costNote: document.getElementById("cost-note"),
    closeItinerary: document.getElementById("close-itinerary")
};

function formatINR(n) {
    return n.toLocaleString("en-IN");
}

function durationLabel(days) {
    if (days === 2) return "weekend";
    if (days === 3) return "long weekend";
    if (days === 5) return "short break";
    return "week away";
}

function updateHeroStat() {
    const matches = computeMatches();
    const strong = matches.filter((m) => m.percent >= 55);

    el.heroBudget.textContent = formatINR(state.budget);
    el.heroCount.textContent = strong.length;
    const fillPct = Math.min(100, Math.round((strong.length / destinations.length) * 100));
    el.heroFill.style.width = fillPct + "%";

    if (strong.length === 0) {
        el.heroCaption.textContent = "Nothing clears that budget yet — try loosening it";
    } else if (state.interests.size === 0) {
        el.heroCaption.textContent = "Pick at least one interest to sharpen this";
    } else {
        el.heroCaption.textContent = `Best fit: ${matches[0].dest.name}, ${matches[0].percent}% match`;
    }
}

function renderList() {
    currentMatches = computeMatches();
    const shown = currentMatches.slice(0, 4);

    el.resultsHeading.textContent = `Top picks for your ${durationLabel(state.duration)}`;
    el.resultsBadge.textContent = `${shown.filter((m) => m.percent >= 55).length} strong matches`;

    el.list.innerHTML = "";

    if (shown.every((m) => m.percent < 30)) {
        const empty = document.createElement("div");
        empty.className = "empty-state";
        empty.textContent = "Nothing scores well against this combination — try a wider budget or a different duration.";
        el.list.appendChild(empty);
        return;
    }

    shown.forEach((match, i) => {
        const row = document.createElement("div");
        row.className = "destination";
        row.setAttribute("role", "button");
        row.setAttribute("tabindex", "0");
        row.setAttribute("aria-expanded", openItineraryId === match.dest.id ? "true" : "false");

        row.innerHTML = `
            <span class="destination-rank">${i + 1}</span>
            <div class="destination-main">
                <h3>${match.dest.name}</h3>
                <p class="region">${match.dest.region}</p>
                <p class="blurb">${match.dest.blurb}</p>
                <div class="destination-tags">
                    ${match.dest.tags.map((t) => `<span>${t}</span>`).join("")}
                </div>
            </div>
            <div class="destination-match">
                <strong>${match.percent}%</strong>
                match
            </div>
            <div class="destination-cost">
                <strong>₹${formatINR(match.cost.total)}</strong>
                <span>per person, ${state.duration} ${state.duration === 1 ? "day" : "days"}</span>
            </div>
        `;

        row.addEventListener("click", () => openItinerary(match));
        row.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openItinerary(match);
            }
        });

        el.list.appendChild(row);
    });
}

function buildDayPlan(dest, duration) {
    const pool = dest.highlightPool.slice();
    const days = [];
    const perDay = Math.max(1, Math.ceil(pool.length / duration));

    for (let d = 0; d < duration; d++) {
        const chunk = pool.splice(0, perDay);
        if (chunk.length === 0) {
            chunk.push(d === duration - 1 ? "Free morning before heading back" : "Rest and explore the immediate area at your own pace");
        }
        days.push(chunk);
    }
    return days;
}

function openItinerary(match) {
    openItineraryId = match.dest.id;
    const days = buildDayPlan(match.dest, state.duration);

    el.itineraryEyebrow.textContent = `${match.percent}% match · ${match.dest.region}`;
    el.itineraryTitle.textContent = `${state.duration}-day plan for ${match.dest.name}`;

    el.itineraryDays.innerHTML = days
        .map(
            (items, i) => `
        <div class="itinerary-day">
            <h4>Day ${i + 1}</h4>
            <ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>
        </div>
    `
        )
        .join("");

    el.costRows.innerHTML = `
        <div class="cost-row"><span>Transport (round trip)</span><span>₹${formatINR(match.cost.transport)}</span></div>
        <div class="cost-row"><span>Stay${state.travelers >= 3 ? " (shared room)" : ""}</span><span>₹${formatINR(match.cost.stay)}</span></div>
        <div class="cost-row"><span>Food</span><span>₹${formatINR(match.cost.food)}</span></div>
        <div class="cost-row"><span>Activities and entry fees</span><span>₹${formatINR(match.cost.activities)}</span></div>
    `;
    el.costTotal.textContent = "₹" + formatINR(match.cost.total);

    const diff = match.cost.total - state.budget;
    if (diff <= 0) {
        el.costNote.textContent = `₹${formatINR(Math.abs(diff))} under your budget of ₹${formatINR(state.budget)}, for ${state.travelers} ${state.travelers === 1 ? "traveler" : "travelers"}.`;
    } else {
        el.costNote.textContent = `Runs ₹${formatINR(diff)} over your budget of ₹${formatINR(state.budget)} — drop a day or shift the duration selector to bring it down.`;
    }

    el.itinerary.hidden = false;
    el.itinerary.scrollIntoView({ behavior: "smooth", block: "nearest" });
    renderList();
}

function closeItinerary() {
    openItineraryId = null;
    el.itinerary.hidden = true;
    renderList();
}

// ---------------------------------------------------------------
// Event wiring
// ---------------------------------------------------------------

el.budgetSlider.addEventListener("input", (e) => {
    state.budget = Number(e.target.value);
    el.budgetDisplay.textContent = formatINR(state.budget);
    updateHeroStat();
});

el.durationGroup.addEventListener("click", (e) => {
    const btn = e.target.closest(".segment");
    if (!btn) return;
    state.duration = Number(btn.dataset.days);
    [...el.durationGroup.children].forEach((c) => c.classList.remove("active"));
    btn.classList.add("active");
    updateHeroStat();
});

el.travelersMinus.addEventListener("click", () => {
    state.travelers = Math.max(1, state.travelers - 1);
    el.travelersCount.textContent = state.travelers;
    updateHeroStat();
});

el.travelersPlus.addEventListener("click", () => {
    state.travelers = Math.min(6, state.travelers + 1);
    el.travelersCount.textContent = state.travelers;
    updateHeroStat();
});

el.interestGroup.addEventListener("click", (e) => {
    const btn = e.target.closest(".interest");
    if (!btn) return;
    const tag = btn.dataset.tag;
    if (state.interests.has(tag)) {
        state.interests.delete(tag);
        btn.classList.remove("active");
    } else {
        state.interests.add(tag);
        btn.classList.add("active");
    }
    updateHeroStat();
});

el.createTrip.addEventListener("click", () => {
    updateHeroStat();
    renderList();
    const strongCount = currentMatches.filter((m) => m.percent >= 55).length;
    el.message.textContent = `Matched ${strongCount} of ${destinations.length} destinations against a ₹${formatINR(state.budget)} budget over a ${durationLabel(state.duration)} for ${state.travelers} ${state.travelers === 1 ? "traveler" : "travelers"}.`;
    document.getElementById("recommendations").scrollIntoView({ behavior: "smooth", block: "start" });
});

el.closeItinerary.addEventListener("click", closeItinerary);

// ---------------------------------------------------------------
// Init
// ---------------------------------------------------------------

updateHeroStat();
renderList();
