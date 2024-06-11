function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'module/skills/views/member.html',
        controller: 'SkillMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: 'm'
        }
    };
}