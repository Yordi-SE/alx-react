
export function getFullYear() {
    const current_year = new Date().getFullYear();
    return current_year
}
export function getFooterCopy(insIndex) {
    if (insIndex) {
        return "Holberton School";
    }
    else {
        return "Holberton School main dashboard";
    }
}

export function getLatestNotification() {
    return '<strong>Urgent requirement</strong> - complete by EOD'
}