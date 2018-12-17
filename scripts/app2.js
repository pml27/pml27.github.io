// toLogo returns the corresponding logo image
function toPng(name) {
    var out = `<img src="images/` + name + `.png">`
	return out
}

new Vue({
    el: "#app",
	data: {
        myLogo: 'images/corelight-logo.png',
        logo: toPng("corelight-logo"),
        headerTitle: 'Zeek cheatsheets',
        cardDns: toPng("XS-dns-card-activated"),
        cardDownload: toPng("img-zeek-logs-fan"),
        navLinks: [
            {name: "Popular", id: 1, url: "popular.html"},
            {name: "SMB", id: 2, url: "smb.html"},
            {name: "All", id: 3, url: "all.html"}
        ],
        popPdfs: [
            {name: "conn", id: 1, desc: 'IP, TCP, UDP, ICMP connection details', color: "#3db8c2", url: "docs/conn-log.pdf"},
            {name: "conn history", id: 2, desc: 'Orig UPPERCASE, Resp lowercase, compressed', color: "#a8dfe4", url: "docs/conn-history-log.pdf"},
            {name: "conn state", id: 3, desc: 'A summarized state for each connection', color: "#a8dfe4", url: "docs/conn-state-log.pdf"},
            {name: "dns", id: 4, desc: 'DNS query/response details', color: "#45559c", url: "docs/dns-log.pdf"},
            {name: "http", id: 5, desc: 'HTTP request/reply details', color: "#003d71", url: "docs/http-log.pdf"},
            {name: "all", id: 6, desc: 'Get all the cheatsheets in one PDF.', color: "none", url: "docs/10510-Corelight-Bro-Zeek-Logs-Combined-Version-2.6.pdf"}
        ],
        isActive: false
    },
    methods: {
        makeActive: function(){
            this.isActive = !this.isActive;
        }
    }
});


