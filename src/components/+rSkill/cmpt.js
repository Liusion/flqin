export default angular
	.module("rSkill", [
	])
	.component("resumeSkill", {
		templateUrl : "components/+rSkill/cmpt.html",
		controller  : ResumeSkillCtrl
	})
	.name;

function ResumeSkillCtrl() {
	console.log("footer");
}