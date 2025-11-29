import StakingList from "./components/VaultsList";
import StakingStats from "./components/VaultsStats";

export default function VaultsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Staking Pools</h1>
          <p className="text-slate-400 text-lg">다양한 스테이킹 풀에 참여하고 보상을 받으세요</p>
        </div>

        {/* Stats Section */}
        <StakingStats />

        {/* Staking List */}
        <StakingList />
      </main>
    </div>
  );
}
