
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLightbulb,
    faShieldHalved,
    faGaugeHigh,
    faUsers,
    faArrowRight,
    faBullseye,
    faDiamond,
    faGlobe,
    faBook,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Header from "@components/ui/Header";
import Footer from "@components/ui/Footer";
import ValueCard from "@components/ui/ValueCards";
import cyberpunkImg from "@images/Cyberpunk aesthetic computer hardware.png";
import performanceChartImg from "@images/Performance chart.png";
import teamImg from "@images/Team meeting.png";

const sidebarLinks = [
    { id: "mission", label: "Mission", icon: faBullseye },
    { id: "values", label: "Values", icon: faDiamond },
    { id: "collective", label: "Decentralizing", icon: faGlobe },
    { id: "team", label: "Team", icon: faUsers },
    { id: "cta", label: "Genesis", icon: faBook },
];

const values = [
    {
        icon: faLightbulb,
        title: "Innovation",
        description:
            "We constantly push the boundaries of what's possible in knowledge sharing, harnessing cutting-edge tools to redefine the scope of what's possible in code sharing.",
        color: "text-yellow-400",
        bgColor: "bg-yellow-400/10",
        borderColor: "border-yellow-400/10",
    },
    {
        icon: faUsers,
        title: "Community First",
        description:
            "Every feature we build starts with our community. We listen, iterate, and ship based on real developer needs, ensuring our community stays at the core of all decisions.",
        color: "text-[#c0c1ff]",
        bgColor: "bg-[#c0c1ff]/10",
        borderColor: "border-[#c0c1ff]/10",
    },
    {
        icon: faShieldHalved,
        title: "Integrity",
        description:
            "We maintain the highest standards of code quality and intellectual property protection, safeguarding the trust that our contributors place in us.",
        color: "text-emerald-400",
        bgColor: "bg-emerald-400/10",
        borderColor: "border-emerald-400/10",
    },
    {
        icon: faGaugeHigh,
        title: "Performance",
        description:
            "We optimize for the milliseconds that matter. High-speed indexing and low-latency discovery are baked into our DNA.",
        color: "text-[#2fd9f4]",
        bgColor: "bg-[#2fd9f4]/10",
        borderColor: "border-[#2fd9f4]/10",
        imageUrl: performanceChartImg,
        horizontal: true,
    },
];

const teamMembers = [
    {
        name: "Vương Minh Thắng",
        role: "Leader",
        gradient: "bg-gradient-to-br from-[#c0c1ff] to-[#8083ff]",
    },
    {
        name: "Dương",
        role: "Ngu",
        gradient: "bg-gradient-to-br from-emerald-400 to-emerald-600",
    },
    {
        name: "Huy",
        role: "Ngu",
        gradient: "bg-gradient-to-br from-yellow-400 to-orange-500",
    },
];

const stats = [
    { value: "2.4M+", label: "Downloads" },
    { value: "150K", label: "Contributors" },
    { value: "99.8%", label: "Uptime SLA" },
];

const AboutUs = () => {
    const [activeSection, setActiveSection] = useState("mission");

    useEffect(() => {
        const ids = ["mission", "values", "collective", "team", "cta"];
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { rootMargin: "-30% 0px -60% 0px" }
        );
        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <section className="min-h-screen font-sans bg-[#0b1326] text-white flex flex-col">
            <Header />

            <div className="flex flex-1 max-w-[1400px] w-full mx-auto">
                {/* ── SIDEBAR ── */}
                <aside className="hidden lg:flex flex-col w-[220px] shrink-0 sticky top-20 self-start h-fit py-8 pr-6">
                    <div className="mb-6 pl-4">
                        <h3 className="text-white text-sm font-bold tracking-wide">
                            About DevSharing
                        </h3>
                        <p className="text-[#5a6178] text-xs mt-1">
                            the architect app store
                        </p>
                    </div>
                    <nav className="flex flex-col gap-1">
                        {sidebarLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollTo(link.id)}
                                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-left text-sm transition-all duration-200
                  ${activeSection === link.id
                                        ? "bg-[#1a2540] text-white font-semibold"
                                        : "text-[#5a6178] hover:text-[#908fa0] hover:bg-[#111c33]/50"
                                    }`}
                            >
                                <FontAwesomeIcon
                                    icon={link.icon}
                                    className={`text-xs w-4 ${activeSection === link.id
                                        ? "text-[#2fd9f4]"
                                        : "text-[#3a4560]"
                                        }`}
                                />
                                {link.label}
                            </button>
                        ))}
                    </nav>
                </aside>

                {/* ── MAIN CONTENT ── */}
                <main className="flex-1 lg:border-l border-white/5 min-w-0">
                    {/* ─── HERO ─── */}
                    <section className="relative pt-16 pb-24 px-6 md:px-12 overflow-hidden text-center">
                        <div className="absolute inset-0 z-0">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#c0c1ff]/5 rounded-full blur-[120px] pointer-events-none" />
                        </div>
                        <div className="relative z-10 max-w-3xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-[#3e3c8f]/20 border border-[#464554]/20">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#2fd9f4] animate-pulse" />
                                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#2fd9f4]">
                                    Established MMXXIII
                                </span>
                            </div>
                            <h1 className="font-['Space_Grotesk'] text-4xl md:text-6xl font-bold tracking-tighter mb-6 leading-[1.08] text-white">
                                Architecting the Future
                                <br />
                                of <span className="text-gradient">Knowledge</span>
                            </h1>
                            <p className="text-[#6b7190] text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                                DevSharing is the premier platform where synthetic architects
                                and elite developers collaborate to share and discover
                                high-fidelity code patterns, architecture blueprints, and
                                performance-optimized logic.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 font-bold">
                                <button className="px-7 py-3 rounded-lg bg-gradient-to-br from-[#c0c1ff] to-[#8083ff] text-[#1000a9] text-sm hover:scale-[1.02] transition-all shadow-xl shadow-[#c0c1ff]/10">
                                    Explore the Registry
                                </button>
                                <button className="px-7 py-3 rounded-lg bg-[#1a2540] border border-[#2a3555] text-[#908fa0] text-sm hover:bg-[#222f4a] transition-all">
                                    Documentation
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* thin separator */}
                    <div className="h-px bg-white/5 mx-6 md:mx-12" />

                    {/* ─── OUR MISSION ─── */}
                    <section id="mission" className="px-6 md:px-12 py-20">
                        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                            <div>
                                <h2 className="font-['Space_Grotesk'] text-2xl md:text-3xl font-bold mb-6 tracking-tight text-white">
                                    Our Mission
                                </h2>
                                <p className="text-[#6b7190] text-[15px] leading-relaxed mb-5">
                                    We believe that the next leap in software engineering won't
                                    come from a new framework, but from the democratization of
                                    deep architectural wisdom. Our purpose is to empower every
                                    developer to build faster, smarter, and more resiliently
                                    through collective intelligence.
                                </p>
                                <p className="text-[#6b7190] text-[15px] leading-relaxed mb-10">
                                    By curating a high-fidelity environment where code is treated
                                    as an artifact of lasting value — not just a functional
                                    script, we are building the world-class repository for the
                                    modern synthetic architect.
                                </p>
                                <div className="flex flex-wrap gap-10 mb-8">
                                    {stats.map((stat) => (
                                        <div key={stat.label}>
                                            <p className="text-2xl font-extrabold text-[#2fd9f4]">
                                                {stat.value}
                                            </p>
                                            <p className="text-xs text-[#5a6178] mt-1 uppercase tracking-wider font-medium">
                                                {stat.label}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#2fd9f4] hover:text-[#63e3f9] transition-colors group"
                                >
                                    Read our blog
                                    <FontAwesomeIcon
                                        icon={faArrowRight}
                                        className="text-[10px] group-hover:translate-x-1 transition-transform"
                                    />
                                </a>
                            </div>
                            <div className="relative">
                                <div className="rounded-2xl overflow-hidden border border-white/5 shadow-2xl shadow-black/30">
                                    <img
                                        src={cyberpunkImg}
                                        alt="Developer working"
                                        className="w-full h-[320px] object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-5 -right-3 md:right-4 glass-panel rounded-xl p-4 border border-white/10 shadow-xl max-w-[200px]">
                                    <p className="text-xs text-[#c0c1ff] font-semibold italic leading-relaxed">
                                        "The code is the architecture."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ─── CORE VALUES ─── */}
                    <section
                        id="values"
                        className="px-6 md:px-12 py-20 bg-[#0a1120] relative overflow-hidden"
                    >
                        <div className="absolute top-12 right-8 text-[100px] md:text-[160px] font-extrabold text-white/[0.02] tracking-tight pointer-events-none select-none leading-none">
                            VALUES
                        </div>
                        <div className="max-w-6xl mx-auto relative z-10">
                            <h2 className="font-['Space_Grotesk'] text-2xl md:text-3xl font-bold mb-3 tracking-tight text-white">
                                Core Values
                            </h2>
                            <p className="text-[#5a6178] max-w-lg mb-12 text-sm">
                                The principles that guide every line of code in our ecosystem.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {values.map((v) =>
                                    v.horizontal ? (
                                        <div
                                            key={v.title}
                                            className={`rounded-2xl p-6 bg-[#111c33] border ${v.borderColor} hover:border-white/10 transition-all duration-300 hover:-translate-y-0.5 flex flex-row items-start gap-5`}
                                        >
                                            <div className="flex-1 min-w-0">
                                                <div className={`w-10 h-10 rounded-xl ${v.bgColor} flex items-center justify-center mb-4`}>
                                                    <FontAwesomeIcon icon={v.icon} className={`${v.color} text-sm`} />
                                                </div>
                                                <h3 className="text-base font-bold text-white mb-2">{v.title}</h3>
                                                <p className="text-[#6b7190] text-sm leading-relaxed">{v.description}</p>
                                            </div>
                                            <div className="w-[140px] shrink-0 rounded-xl overflow-hidden border border-white/5">
                                                <img src={v.imageUrl} alt={v.title} className="w-full h-[100px] object-cover" />
                                            </div>
                                        </div>
                                    ) : (
                                        <ValueCard
                                            key={v.title}
                                            icon={v.icon}
                                            title={v.title}
                                            description={v.description}
                                            color={v.color}
                                            bgColor={v.bgColor}
                                            borderColor={v.borderColor}
                                            imageUrl={v.imageUrl}
                                        />
                                    )
                                )}
                            </div>
                        </div>
                    </section>

                    {/* ─── THE GLOBAL COLLECTIVE ─── */}
                    <section id="collective" className="px-6 md:px-12 py-20">
                        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
                            <div className="relative">
                                <div className="rounded-2xl overflow-hidden border border-white/5 shadow-2xl shadow-black/30">
                                    <img
                                        src={teamImg}
                                        alt="The Global Collective"
                                        className="w-full h-[340px] object-cover"
                                    />
                                </div>
                            </div>
                            <div>
                                <h2 className="font-['Space_Grotesk'] text-2xl md:text-3xl font-bold mb-5 tracking-tight text-white">
                                    The Global{" "}
                                    <span className="text-gradient">Collective</span>
                                </h2>
                                <p className="text-[#6b7190] text-[15px] leading-relaxed mb-8">
                                    DevSharing is powered by a global network of over 160,000
                                    synthetic architects. From solo indie hackers to engineers at
                                    Fortune 500 companies, our community is the engine of
                                    innovation.
                                </p>
                                <div id="team" className="space-y-3">
                                    {teamMembers.map((member) => (
                                        <div
                                            key={member.name}
                                            className="flex items-center gap-4 p-3.5 rounded-xl bg-[#111c33] border border-white/5 hover:border-white/10 transition-all"
                                        >
                                            <div
                                                className={`w-9 h-9 rounded-full ${member.gradient} flex items-center justify-center text-xs font-bold text-white shadow-lg shrink-0`}
                                            >
                                                {member.name.charAt(0)}
                                            </div>
                                            <div className="min-w-0">
                                                <p className="text-sm font-semibold text-white truncate">
                                                    {member.name}
                                                </p>
                                                <p className="text-xs text-[#5a6178]">{member.role}</p>
                                            </div>
                                            <div className="ml-auto flex gap-3 text-[#5a6178] shrink-0">
                                                <FontAwesomeIcon
                                                    icon={faGithub}
                                                    className="hover:text-white cursor-pointer transition-colors text-sm"
                                                />
                                                <FontAwesomeIcon
                                                    icon={faLinkedin}
                                                    className="hover:text-[#0077b5] cursor-pointer transition-colors text-sm"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* ─── CTA — JOIN THE REVOLUTION ─── */}
                    <section id="cta" className="px-6 md:px-12 py-24">
                        <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-10 md:p-16 text-center relative border border-[#464554]/15 overflow-hidden">
                            <div className="absolute -top-16 -right-16 w-48 h-48 bg-[#c0c1ff]/8 rounded-full blur-3xl pointer-events-none" />
                            <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-[#2fd9f4]/8 rounded-full blur-3xl pointer-events-none" />
                            <div className="relative z-10">
                                <h2 className="font-['Space_Grotesk'] text-3xl md:text-4xl font-bold mb-4 text-white">
                                    Join the Revolution
                                </h2>
                                <p className="text-[#6b7190] text-sm max-w-md mx-auto mb-8 leading-relaxed">
                                    Become a part of the platform that is redefining software
                                    architecture for the synthetic era.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 font-bold">
                                    <button className="px-8 py-3.5 rounded-lg bg-gradient-to-br from-[#c0c1ff] to-[#8083ff] text-sm text-[#1000a9] hover:scale-[1.02] transition-transform shadow-xl shadow-[#c0c1ff]/10">
                                        Start Contributing
                                    </button>
                                    <button className="px-8 py-3.5 rounded-lg bg-[#1a2540] border border-[#2a3555] text-sm text-[#2fd9f4] hover:bg-[#222f4a] transition-all">
                                        Join Discord
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>

            <Footer />
        </section>
    );
};

export default AboutUs;
