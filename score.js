const appData = {
    'Amino': {
        recommended: false, e2e_default: false, e2e_available: false, voice_encrypted: false,
        pfs: false, transit_encrypted: true, server_encrypted: true, client_encrypted: false,
        decentralized: false, dns_independent: false, no_global_id: false, no_immutable: false,
        no_email: false, no_phone: true, good_jurisdiction: false, no_data_feed: false,
        no_preservation: false, no_scan: true, removes_metadata: false, no_location: true,
        airgapped: false, deleted_removed: false, received_removed: false,
        ai: true
    },
    'Briar': {
        recommended: true, e2e_default: true, e2e_available: true, voice_encrypted: null,
        pfs: true, transit_encrypted: true, server_encrypted: true, client_encrypted: true,
        decentralized: true, dns_independent: true, no_global_id: false, no_immutable: false,
        no_email: true, no_phone: true, good_jurisdiction: true, no_data_feed: true,
        no_preservation: true, no_scan: true, removes_metadata: false, no_location: true,
        airgapped: null, deleted_removed: true, received_removed: null,
        moderation: true, ai: true
    },
    'Cabal': {
        recommended: false, e2e_default: false, e2e_available: true, voice_encrypted: null,
        pfs: false, transit_encrypted: true, server_encrypted: null, client_encrypted: false,
        decentralized: true, dns_independent: true, no_global_id: true, no_immutable: false,
        no_email: true, no_phone: true, good_jurisdiction: true, no_data_feed: true,
        no_preservation: true, no_scan: true, removes_metadata: null, no_location: true,
        airgapped: true, deleted_removed: null, received_removed: null,
        ai: true
    },
    'Cwtch': {
        recommended: true, e2e_default: true, e2e_available: true, voice_encrypted: null,
        pfs: true, transit_encrypted: true, server_encrypted: true, client_encrypted: true,
        decentralized: true, dns_independent: true, no_global_id: false, no_immutable: false,
        no_email: true, no_phone: true, good_jurisdiction: true, no_data_feed: true,
        no_preservation: true, no_scan: true, removes_metadata: false, no_location: true,
        airgapped: false, deleted_removed: true, received_removed: null,
        moderation: true, ai: true
    },
    'Discord': {
        recommended: false, e2e_default: false, e2e_available: false, voice_encrypted: false,
        pfs: false, transit_encrypted: true, server_encrypted: 0.5, client_encrypted: false,
        decentralized: false, dns_independent: false, no_global_id: false, no_immutable: false,
        no_email: false, no_phone: 0.5, good_jurisdiction: false, no_data_feed: false,
        no_preservation: false, no_scan: false, removes_metadata: false, no_location: true,
        airgapped: false, deleted_removed: false, received_removed: false,
        moderation: false, ai: false
    },
    'Dust': {
        recommended: false, e2e_default: false, e2e_available: false, voice_encrypted: null,
        pfs: false, transit_encrypted: true, server_encrypted: false, client_encrypted: false,
        decentralized: false, dns_independent: false, no_global_id: false, no_immutable: false,
        no_email: true, no_phone: true, good_jurisdiction: false, no_data_feed: false,
        no_preservation: false, no_scan: true, removes_metadata: false, no_location: true,
        airgapped: false, deleted_removed: false, received_removed: false,
        ai: true
    },
    'Google Messages': {
        recommended: false, e2e_default: true, e2e_available: true, voice_encrypted: true,
        pfs: false, transit_encrypted: true, server_encrypted: false, client_encrypted: false,
        decentralized: false, dns_independent: false, no_global_id: false, no_immutable: false,
        no_email: false, no_phone: false, good_jurisdiction: false, no_data_feed: false,
        no_preservation: false, no_scan: true, removes_metadata: false, no_location: false,
        airgapped: false, deleted_removed: false, received_removed: false
    },
    'Grindr DMs': {
        recommended: false, e2e_default: false, e2e_available: false, voice_encrypted: false,
        pfs: false, transit_encrypted: 0.5, server_encrypted: 0.5, client_encrypted: false,
        decentralized: false, dns_independent: false, no_global_id: false, no_immutable: false,
        no_email: false, no_phone: true, good_jurisdiction: false, no_data_feed: false,
        no_preservation: false, no_scan: false, removes_metadata: false, no_location: false,
        airgapped: false, deleted_removed: false, received_removed: false,
        moderation: false
    },
    'GroupMe': {
        recommended: false, e2e_default: false, e2e_available: false, voice_encrypted: false,
        pfs: false, transit_encrypted: true, server_encrypted: false, client_encrypted: false,
        decentralized: false, dns_independent: false, no_global_id: false, no_immutable: false,
        no_email: false, no_phone: true, good_jurisdiction: false, no_data_feed: false,
        no_preservation: false, no_scan: true, removes_metadata: false, no_location: true,
        airgapped: false, deleted_removed: true, received_removed: false,
        moderation: false
    },
    'iMessage': {
        recommended: false, e2e_default: true, e2e_available: true, voice_encrypted: true,
        pfs: false, transit_encrypted: true, server_encrypted: true, client_encrypted: true,
        decentralized: false, dns_independent: false, no_global_id: false, no_immutable: false,
        no_email: false, no_phone: true, good_jurisdiction: false, no_data_feed: false,
        no_preservation: true, no_scan: false, removes_metadata: false, no_location: false,
        airgapped: false, deleted_removed: true, received_removed: true,
        moderation: false, ai: false
    },
    'Instagram DMs': {
        recommended: false, e2e_default: false, e2e_available: true, voice_encrypted: false,
        pfs: false, transit_encrypted: true, server_encrypted: true, client_encrypted: false,
        decentralized: false, dns_independent: false, no_global_id: false, no_immutable: false,
        no_email: false, no_phone: 0.5, good_jurisdiction: false, no_data_feed: false,
        no_preservation: false, no_scan: false, removes_metadata: false, no_location: true,
        airgapped: false, deleted_removed: false, received_removed: false,
        moderation: false, ai: false
    },
    'IRC': {
        recommended: false, e2e_default: false, e2e_available: 0.5, voice_encrypted: null,
        pfs: false, transit_encrypted: false, server_encrypted: false, client_encrypted: false,
        decentralized: true, dns_independent: false, no_global_id: false, no_immutable: false,
        no_email: true, no_phone: true, good_jurisdiction: true, no_data_feed: true,
        no_preservation: true, no_scan: true, removes_metadata: false, no_location: true,
        airgapped: true, deleted_removed: false, received_removed: true,
        moderation: true, ai: true
    },
    'Kik': {
        recommended: false, e2e_default: false, e2e_available: false, voice_encrypted: false,
        pfs: false, transit_encrypted: true, server_encrypted: false, client_encrypted: false,
        decentralized: false, dns_independent: false, no_global_id: false, no_immutable: false,
        no_email: false, no_phone: true, good_jurisdiction: false, no_data_feed: false,
        no_preservation: false, no_scan: false, removes_metadata: false, no_location: false,
        airgapped: false, deleted_removed: false, received_removed: false,
        moderation: false
    },
    'LINE': {
        recommended: false, e2e_default: false, e2e_available: false, voice_encrypted: false,
        pfs: false, transit_encrypted: true, server_encrypted: true, client_encrypted: true,
        decentralized: false, dns_independent: false, no_global_id: false, no_immutable: false,
        no_email: false, no_phone: true, good_jurisdiction: false, no_data_feed: false,
        no_preservation: false, no_scan: false, removes_metadata: false, no_location: false,
        airgapped: false, deleted_removed: false, received_removed: false
    },
    'Matrix': {
        recommended: false, e2e_default: true, e2e_available: true, voice_encrypted: true,
        pfs: false, transit_encrypted: true, server_encrypted: 0.8, client_encrypted: 0.2,
        decentralized: true, dns_independent: false, no_global_id: false, no_immutable: false,
        no_email: 0.5, no_phone: 0.5, good_jurisdiction: true, no_data_feed: 0.5,
        no_preservation: 0.5, no_scan: true, removes_metadata: false, no_location: true,
        airgapped: true, deleted_removed: false, received_removed: false,
        moderation: true, ai: true
    },
    'Mattermost': {
        recommended: false, e2e_default: false, e2e_available: false, voice_encrypted: false,
        pfs: false, transit_encrypted: true, server_encrypted: true, client_encrypted: false,
        decentralized: false, dns_independent: false, no_global_id: false, no_immutable: false,
        no_email: 0.5, no_phone: 0.5, good_jurisdiction: 0.5, no_data_feed: 0.5,
        no_preservation: 0.5, no_scan: true, removes_metadata: false, no_location: true,
        airgapped: true, deleted_removed: false, received_removed: false
    },
    'FB Messenger': {
        recommended: false, e2e_default: false, e2e_available: true, voice_encrypted: false,
        pfs: false, transit_encrypted: true, server_encrypted: true, client_encrypted: false,
        decentralized: false, dns_independent: false, no_global_id: false, no_immutable: false,
        no_email: false, no_phone: 0.5, good_jurisdiction: false, no_data_feed: false,
        no_preservation: false, no_scan: false, removes_metadata: false, no_location: true,
        airgapped: false, deleted_removed: false, received_removed: false,
        moderation: false, ai: false
    },
    'New ICQ': {
        recommended: false, e2e_default: false, e2e_available: false, voice_encrypted: false,
        pfs: false, transit_encrypted: 0.5, server_encrypted: 0.5, client_encrypted: false,
        decentralized: false, dns_independent: false, no_global_id: false, no_immutable: false,
        no_email: false, no_phone: 0.5, good_jurisdiction: false, no_data_feed: false,
        no_preservation: false, no_scan: false, removes_metadata: false, no_location: true,
        airgapped: false, deleted_removed: false, received_removed: false
    },
    'Revolt': {
        recommended: false, e2e_default: false, e2e_available: false, voice_encrypted: false,
        pfs: false, transit_encrypted: true, server_encrypted: true, client_encrypted: false,
        decentralized: false, dns_independent: false, no_global_id: false, no_immutable: false,
        no_email: false, no_phone: true, good_jurisdiction: false, no_data_feed: true,
        no_preservation: false, no_scan: true, removes_metadata: false, no_location: true,
        airgapped: true, deleted_removed: true, received_removed: true
    },
    'Session': {
        recommended: false, e2e_default: 0.5, e2e_available: true, voice_encrypted: true,
        pfs: false, transit_encrypted: true, server_encrypted: 0.5, client_encrypted: 0.5,
        decentralized: 0.5, dns_independent: false, no_global_id: false, no_immutable: false,
        no_email: true, no_phone: true, good_jurisdiction: 0.7, no_data_feed: true,
        no_preservation: true, no_scan: true, removes_metadata: true, no_location: true,
        airgapped: false, deleted_removed: false, received_removed: false,
        moderation: true
    },
    'SMS': {
        recommended: false, e2e_default: false, e2e_available: false, voice_encrypted: false,
        pfs: false, transit_encrypted: false, server_encrypted: false, client_encrypted: false,
        decentralized: 0.5, dns_independent: true, no_global_id: false, no_immutable: false,
        no_email: false, no_phone: false, good_jurisdiction: 0.5, no_data_feed: 0.5,
        no_preservation: 0.5, no_scan: true, removes_metadata: false, no_location: false,
        airgapped: false, deleted_removed: false, received_removed: false,
        moderation: 0.5, ai: true
    },
    'Signal': {
        recommended: true, e2e_default: true, e2e_available: true, voice_encrypted: true,
        pfs: true, transit_encrypted: true, server_encrypted: true, client_encrypted: true,
        decentralized: false, dns_independent: false, no_global_id: false, no_immutable: false,
        no_email: true, no_phone: false, good_jurisdiction: false, no_data_feed: true,
        no_preservation: true, no_scan: true, removes_metadata: true, no_location: true,
        airgapped: false, deleted_removed: true, received_removed: true,
        moderation: true, ai: true
    },
    'SimpleX Chat': {
        recommended: true, e2e_default: true, e2e_available: true, voice_encrypted: true,
        pfs: true, transit_encrypted: true, server_encrypted: true, client_encrypted: true,
        decentralized: true, dns_independent: true, no_global_id: true, no_immutable: true,
        no_email: true, no_phone: true, good_jurisdiction: true, no_data_feed: true,
        no_preservation: true, no_scan: true, removes_metadata: true, no_location: true,
        airgapped: true, deleted_removed: true, received_removed: true,
        moderation: false, ai: true
    },
    'Snapchat': {
        recommended: false, e2e_default: false, e2e_available: false, voice_encrypted: false,
        pfs: false, transit_encrypted: true, server_encrypted: 0.5, client_encrypted: false,
        decentralized: false, dns_independent: false, no_global_id: false, no_immutable: false,
        no_email: false, no_phone: 0.5, good_jurisdiction: false, no_data_feed: 0.5,
        no_preservation: false, no_scan: false, removes_metadata: false, no_location: false,
        airgapped: false, deleted_removed: false, received_removed: false,
        moderation: false, ai: false
    },
    'Status': {
        recommended: false, e2e_default: true, e2e_available: true, voice_encrypted: null,
        pfs: true, transit_encrypted: true, server_encrypted: null, client_encrypted: true,
        decentralized: 0.5, dns_independent: false, no_global_id: false, no_immutable: false,
        no_email: true, no_phone: true, good_jurisdiction: 0.3, no_data_feed: true,
        no_preservation: true, no_scan: true, removes_metadata: false, no_location: true,
        airgapped: false, deleted_removed: 0.5, received_removed: null,
        moderation: true, ai: true
    },
    'Telegram': {
        recommended: false, e2e_default: false, e2e_available: 0.5, voice_encrypted: 0.5,
        pfs: false, transit_encrypted: true, server_encrypted: true, client_encrypted: false,
        decentralized: false, dns_independent: false, no_global_id: false, no_immutable: false,
        no_email: false, no_phone: false, good_jurisdiction: 0.3, no_data_feed: false,
        no_preservation: false, no_scan: false, removes_metadata: false, no_location: true,
        airgapped: false, deleted_removed: 0.5, received_removed: false,
        moderation: false, ai: false
    },
    'Teams': {
        recommended: false, e2e_default: false, e2e_available: false, voice_encrypted: false,
        pfs: false, transit_encrypted: true, server_encrypted: true, client_encrypted: false,
        decentralized: false, dns_independent: false, no_global_id: false, no_immutable: false,
        no_email: false, no_phone: 0.5, good_jurisdiction: false, no_data_feed: false,
        no_preservation: false, no_scan: true, removes_metadata: false, no_location: true,
        airgapped: false, deleted_removed: false, received_removed: false,
        moderation: false, ai: false
    },
    'Threema': {
        recommended: false, e2e_default: true, e2e_available: true, voice_encrypted: true,
        pfs: false, transit_encrypted: true, server_encrypted: true, client_encrypted: true,
        decentralized: false, dns_independent: false, no_global_id: false, no_immutable: false,
        no_email: true, no_phone: false, good_jurisdiction: 0.7, no_data_feed: true,
        no_preservation: false, no_scan: true, removes_metadata: false, no_location: true,
        airgapped: false, deleted_removed: false, received_removed: false,
        ai: true
    },
    // NEW APPS FROM UPDATED TABLE
    'Tinder DMs': {
        recommended: false, e2e_default: false, e2e_available: false, voice_encrypted: false,
        pfs: false, transit_encrypted: false, server_encrypted: true, client_encrypted: false,
        decentralized: false, dns_independent: false, no_global_id: false, no_immutable: false,
        no_email: false, no_phone: false, good_jurisdiction: false, no_data_feed: false,
        no_preservation: false, no_scan: true, removes_metadata: false, no_location: false,
        airgapped: false, deleted_removed: false, received_removed: false,
        moderation: false
    },
    'Twitch DMs': {
        recommended: false, e2e_default: false, e2e_available: false, voice_encrypted: false,
        pfs: false, transit_encrypted: true, server_encrypted: true, client_encrypted: false,
        decentralized: false, dns_independent: false, no_global_id: false, no_immutable: false,
        no_email: false, no_phone: false, good_jurisdiction: false, no_data_feed: false,
        no_preservation: false, no_scan: true, removes_metadata: false, no_location: true,
        airgapped: false, deleted_removed: false, received_removed: false,
        moderation: false
    },
    'Twitter DMs': {
        recommended: false, e2e_default: false, e2e_available: false, voice_encrypted: false,
        pfs: false, transit_encrypted: 0.5, server_encrypted: 0.8, client_encrypted: false,
        decentralized: false, dns_independent: false, no_global_id: false, no_immutable: false,
        no_email: false, no_phone: 0.5, good_jurisdiction: false, no_data_feed: false,
        no_preservation: false, no_scan: false, removes_metadata: false, no_location: false,
        airgapped: false, deleted_removed: false, received_removed: false,
        moderation: false
    },
    'WeChat': {
        recommended: false, e2e_default: false, e2e_available: false, voice_encrypted: false,
        pfs: false, transit_encrypted: 0.5, server_encrypted: false, client_encrypted: false,
        decentralized: false, dns_independent: false, no_global_id: false, no_immutable: false,
        no_email: false, no_phone: false, good_jurisdiction: false, no_data_feed: false,
        no_preservation: false, no_scan: false, removes_metadata: false, no_location: false,
        airgapped: false, deleted_removed: false, received_removed: false,
        moderation: false, ai: false
    },
    'WhatsApp': {
        recommended: false, e2e_default: true, e2e_available: true, voice_encrypted: true,
        pfs: true, transit_encrypted: true, server_encrypted: true, client_encrypted: true,
        decentralized: false, dns_independent: false, no_global_id: false, no_immutable: false,
        no_email: false, no_phone: false, good_jurisdiction: false, no_data_feed: false,
        no_preservation: false, no_scan: false, removes_metadata: false, no_location: false,
        airgapped: false, deleted_removed: 0.5, received_removed: false,
        moderation: false, ai: false
    },
    'Wire': {
        recommended: true, e2e_default: true, e2e_available: true, voice_encrypted: true,
        pfs: true, transit_encrypted: true, server_encrypted: true, client_encrypted: true,
        decentralized: false, dns_independent: false, no_global_id: false, no_immutable: false,
        no_email: false, no_phone: false, good_jurisdiction: false, no_data_feed: false,
        no_preservation: false, no_scan: true, removes_metadata: false, no_location: true,
        airgapped: true, deleted_removed: true, received_removed: true
    },
    'Xbox Live': {
        recommended: false, e2e_default: false, e2e_available: false, voice_encrypted: false,
        pfs: false, transit_encrypted: true, server_encrypted: false, client_encrypted: false,
        decentralized: false, dns_independent: false, no_global_id: false, no_immutable: false,
        no_email: false, no_phone: false, good_jurisdiction: false, no_data_feed: false,
        no_preservation: false, no_scan: null, removes_metadata: 0.5, no_location: false,
        airgapped: false, deleted_removed: false, received_removed: false,
        moderation: false
    },
    'XMPP': {
        recommended: false, e2e_default: false, e2e_available: 0.5, voice_encrypted: false,
        pfs: false, transit_encrypted: 0.5, server_encrypted: 0.5, client_encrypted: 0.5,
        decentralized: true, dns_independent: false, no_global_id: false, no_immutable: false,
        no_email: false, no_phone: false, good_jurisdiction: 0.5, no_data_feed: 0.5,
        no_preservation: 0.5, no_scan: true, removes_metadata: 0.5, no_location: 0.5,
        airgapped: true, deleted_removed: true, received_removed: true,
        moderation: true, ai: true
    },
    'Zoom': {
        recommended: false, e2e_default: false, e2e_available: false, voice_encrypted: false,
        pfs: false, transit_encrypted: true, server_encrypted: true, client_encrypted: false,
        decentralized: false, dns_independent: false, no_global_id: false, no_immutable: false,
        no_email: false, no_phone: false, good_jurisdiction: false, no_data_feed: false,
        no_preservation: false, no_scan: true, removes_metadata: false, no_location: false,
        airgapped: false, deleted_removed: false, received_removed: false,
        moderation: false, ai: false
    }
};

// Calculate scores for all apps
const results = [];

for (const [app, data] of Object.entries(appData)) {
    let score = 0;
    let maxPossible = 0;
    
    for (const [criterion, value] of Object.entries(data)) {
        if (value !== null) {
            maxPossible += 1;
            if (typeof value === 'boolean') {
                score += value ? 1 : 0;
            } else if (typeof value === 'number') {
                score += value;
            }
        }
    }
    
    const percentage = maxPossible > 0 ? (score / maxPossible * 100) : 0;
    results.push({ app, score, maxPossible, percentage });
}

// Sort by percentage score
results.sort((a, b) => b.percentage - a.percentage);

console.log('COMPLETE MESSAGING APP PRIVACY & SECURITY SCORES (Updated Tiers)\n');
console.log('Rank | App Name        | Score     | Percentage | Tier');
console.log('-----|-----------------|-----------|------------|----------');

results.forEach((result, index) => {
    let tier;
    if (result.percentage >= 90) tier = 'Excellent';
    else if (result.percentage >= 75) tier = 'Very Good';
    else if (result.percentage >= 60) tier = 'Good';
    else if (result.percentage >= 45) tier = 'Fair';
    else if (result.percentage >= 30) tier = 'Poor';
    else if (result.percentage >= 20) tier = 'Bad';
    else tier = 'Very Bad';
    
    const rank = (index + 1).toString().padStart(2);
    const name = result.app.padEnd(15);
    const score = `${result.score.toFixed(1)}/${result.maxPossible}`.padEnd(9);
    const pct = `${result.percentage.toFixed(1)}%`.padEnd(6);
    
    console.log(`${rank}   | ${name} | ${score} | ${pct}     | ${tier}`);
});

console.log(`\nTotal Apps Analyzed: ${results.length}`);
