module.exports = {
	domain: "responsive.sk",
	encoding: "UTF-8",
	lang: "sk",
	get locale() {
		return `${this.lang}_${this.region}`;
	},
	region: "SK",
	scheme: "https",
	siteTitle: "responsive studio",
	get siteUrl() {
		return `${this.scheme}://${this.domain}`;
	},
	tagline: "to be a best bee@beehive",
};
