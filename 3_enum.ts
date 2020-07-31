enum MemberShip {
  Simple,
  Standart,
  Premium
}

const membership = MemberShip.Standart
const membershipreverse = MemberShip[2]
console.log(membership)
console.log(membershipreverse);

enum SocialMedia{
  VL ='VK',
  FACEBOOK = 'FACEBOOK',
  INSTAGRAM = 'INSTAGRAM'
}

const social = SocialMedia.INSTAGRAM
console.log(social)
