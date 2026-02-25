// Mock data for demonstration purposes
import { FoodListing, User, ImpactStats } from "./types";

// ── Mock Users ──────────────────────────────────────────────
export const mockDonor: User = {
    id: "donor-1",
    email: "rajesh@grandhotel.com",
    name: "Rajesh Kumar",
    role: "DONOR",
    orgName: "Grand Palace Hotel",
    phone: "+91 98765 43210",
    latitude: 28.6139,
    longitude: 77.209,
    createdAt: new Date().toISOString(),
};

export const mockNGO: User = {
    id: "ngo-1",
    email: "priya@feedinghope.org",
    name: "Priya Sharma",
    role: "NGO",
    orgName: "Feeding Hope Foundation",
    phone: "+91 91234 56789",
    latitude: 28.6229,
    longitude: 77.2195,
    createdAt: new Date().toISOString(),
};

// ── Helper to create prep times relative to now ──────────────
function hoursAgo(h: number): string {
    return new Date(Date.now() - h * 60 * 60 * 1000).toISOString();
}

// ── Mock Food Listings ──────────────────────────────────────
export const mockListings: FoodListing[] = [
    {
        id: "listing-1",
        donorId: "donor-1",
        foodType: "Biryani & Raita",
        quantity: 50,
        unit: "KG",
        prepTime: hoursAgo(1), // 5 hours left → GREEN
        photoUrl: "/images/biryani.jpg",
        status: "AVAILABLE",
        address: "Grand Palace Hotel, Connaught Place, New Delhi",
        latitude: 28.6315,
        longitude: 77.2167,
        notes: "Hyderabadi Dum Biryani with cucumber raita. Packed in steel containers.",
        createdAt: hoursAgo(1),
        donor: { ...mockDonor },
    },
    {
        id: "listing-2",
        donorId: "donor-2",
        foodType: "Wedding Sweets & Snacks",
        quantity: 200,
        unit: "PLATES",
        prepTime: hoursAgo(3.5), // 2.5 hours left → YELLOW
        photoUrl: "/images/sweets.jpg",
        status: "AVAILABLE",
        address: "Sharma Wedding Hall, Karol Bagh, New Delhi",
        latitude: 28.6519,
        longitude: 77.1907,
        notes: "Assorted sweets including gulab jamun, barfi, and samosas.",
        createdAt: hoursAgo(3.5),
        donor: {
            id: "donor-2",
            email: "venue@sharmahall.com",
            name: "Amit Sharma",
            role: "DONOR",
            orgName: "Sharma Wedding Hall",
            latitude: 28.6519,
            longitude: 77.1907,
            createdAt: new Date().toISOString(),
        },
    },
    {
        id: "listing-3",
        donorId: "donor-3",
        foodType: "Dal, Rice & Roti",
        quantity: 30,
        unit: "KG",
        prepTime: hoursAgo(5.2), // ~0.8 hours left → RED
        photoUrl: "/images/dal-rice.jpg",
        status: "AVAILABLE",
        address: "University Hostel Mess, North Campus, Delhi",
        latitude: 28.6862,
        longitude: 77.2095,
        notes: "Leftover from dinner service. Dal makhani, steamed rice, and fresh rotis.",
        createdAt: hoursAgo(5.2),
        donor: {
            id: "donor-3",
            email: "mess@unihostel.edu",
            name: "Sunil Verma",
            role: "DONOR",
            orgName: "University Hostel Mess",
            latitude: 28.6862,
            longitude: 77.2095,
            createdAt: new Date().toISOString(),
        },
    },
    {
        id: "listing-4",
        donorId: "donor-4",
        foodType: "Paneer Tikka & Naan",
        quantity: 80,
        unit: "PLATES",
        prepTime: hoursAgo(2), // 4 hours left → GREEN
        photoUrl: "/images/paneer.jpg",
        status: "AVAILABLE",
        address: "Spice Garden Restaurant, Lajpat Nagar, Delhi",
        latitude: 28.5685,
        longitude: 77.2437,
        notes: "Freshly prepared paneer tikka with garlic naan. Ideal for 80 servings.",
        createdAt: hoursAgo(2),
        donor: {
            id: "donor-4",
            email: "manager@spicegarden.in",
            name: "Kavita Reddy",
            role: "DONOR",
            orgName: "Spice Garden Restaurant",
            latitude: 28.5685,
            longitude: 77.2437,
            createdAt: new Date().toISOString(),
        },
    },
    {
        id: "listing-5",
        donorId: "donor-1",
        foodType: "Pasta & Garlic Bread",
        quantity: 25,
        unit: "KG",
        prepTime: hoursAgo(0.5), // 5.5 hours left → GREEN
        photoUrl: "/images/pasta.jpg",
        status: "CLAIMED",
        address: "Grand Palace Hotel, Connaught Place, New Delhi",
        latitude: 28.6315,
        longitude: 77.2167,
        notes: "Penne arrabiata with garlic bread slices.",
        createdAt: hoursAgo(0.5),
        donor: { ...mockDonor },
        claim: {
            id: "claim-1",
            listingId: "listing-5",
            ngoId: "ngo-1",
            qrCode: "FWX-CLAIM-listing5-ngo1-" + Date.now(),
            claimedAt: new Date().toISOString(),
            ngo: { ...mockNGO },
        },
    },
    {
        id: "listing-6",
        donorId: "donor-5",
        foodType: "Fruit Salad & Juice",
        quantity: 40,
        unit: "PLATES",
        prepTime: hoursAgo(1.5), // 4.5 hours left → GREEN
        photoUrl: "/images/fruit.jpg",
        status: "AVAILABLE",
        address: "Green Valley Catering, Dwarka, Delhi",
        latitude: 28.5921,
        longitude: 77.0460,
        notes: "Mixed fruit salad with fresh orange juice. Great for immediate consumption.",
        createdAt: hoursAgo(1.5),
        donor: {
            id: "donor-5",
            email: "ops@greenvalley.in",
            name: "Deepak Joshi",
            role: "DONOR",
            orgName: "Green Valley Catering",
            latitude: 28.5921,
            longitude: 77.046,
            createdAt: new Date().toISOString(),
        },
    },
];

// ── Mock Impact Stats ──────────────────────────────────────
export const mockImpactStats: ImpactStats = {
    totalMealsRescued: 12847,
    totalCO2Offset: 12847 * 1.5, // 1.5 kg CO₂ per meal
    totalDonors: 234,
    totalNGOs: 89,
    totalListings: 1456,
    totalClaimed: 1203,
};

// ── Helper: get available listings ─────────────────────────
export function getAvailableListings(): FoodListing[] {
    return mockListings.filter((l) => l.status === "AVAILABLE");
}

// ── Helper: get donor listings ─────────────────────────────
export function getDonorListings(donorId: string): FoodListing[] {
    return mockListings.filter((l) => l.donorId === donorId);
}
