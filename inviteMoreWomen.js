// Simple Fun #152: Invite More Women?

function inviteMoreWomen(L) {
  const men = L.filter((m) => m === 1).length;
  const women = L.filter((w) => w === -1).length;
  return men > women;
}
