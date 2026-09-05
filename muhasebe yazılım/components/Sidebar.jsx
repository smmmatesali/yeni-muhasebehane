// D:\gemini programlar\muhasebe yazılım\components\Sidebar.jsx
export default function Sidebar() {
  return (
    <aside className="w-72 bg-slate-900 text-slate-300 flex flex-col h-screen border-r border-slate-800 font-sans">
      <div className="p-6 border-b border-slate-800 flex items-center space-x-3">
        <div className="bg-indigo-600 text-white p-2 rounded-lg font-bold text-xl">M</div>
        <div>
          <h1 className="text-white font-bold text-lg tracking-wide">Muhasebehane</h1>
          <p className="text-xs text-slate-400">Komuta Merkezi v1.0</p>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 px-3">1. Fatura & Ön Muhasebe</p>
          <ul className="space-y-1">
            <li><a href="#" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 hover:text-white transition-colors"><span>📄</span><span>Gelen / Giden E-Faturalar</span></a></li>
            <li><a href="#" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 hover:text-white transition-colors"><span>🤖</span><span>Akıllı Fatura & Fiş Eşleştirme</span></a></li>
            <li><a href="#" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 hover:text-white transition-colors"><span>🏦</span><span>Banka Hareketleri & Mutabakat</span></a></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 px-3">2. Muhasebe & Defter</p>
          <ul className="space-y-1">
            <li><a href="#" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 hover:text-white transition-colors"><span>🧮</span><span>Mizan & Yevmiye Kontrolü</span></a></li>
            <li><a href="#" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 hover:text-white transition-colors"><span>📋</span><span>E-Beyanname Arşivi</span></a></li>
            <li><a href="#" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 hover:text-white transition-colors"><span>📈</span><span>Enflasyon Muhasebesi</span></a></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 px-3">3. 4 Gözlü Mizan Analizi</p>
          <ul className="space-y-1">
            <li><a href="#" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium bg-indigo-600 text-white shadow-lg shadow-indigo-900/40"><span>🔍</span><span>Mizan Yükle & Analiz Başlat</span></a></li>
            <li><a href="#" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 hover:text-white transition-colors"><span>💼</span><span>İşveren Gözüyle Kârlılık</span></a></li>
            <li><a href="#" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 hover:text-white transition-colors"><span>🏦</span><span>Bankacılar Gözüyle Rasyolar</span></a></li>
            <li><a href="#" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 hover:text-white transition-colors"><span>⚠️</span><span>Vergi Dairesi Risk Denetimi</span></a></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 px-3">4. YMM Akademi</p>
          <ul className="space-y-1">
            <li><a href="#" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 hover:text-white transition-colors"><span>📜</span><span>Muhasebehane Anayasası</span></a></li>
            <li><a href="#" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 hover:text-white transition-colors"><span>📚</span><span>Sınav Konuları & Notlar</span></a></li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 px-3">5. Ofis & Mükellef</p>
          <ul className="space-y-1">
            <li><a href="#" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 hover:text-white transition-colors"><span>🏢</span><span>Mükellef Portföyü</span></a></li>
            <li><a href="#" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 hover:text-white transition-colors"><span>🔔</span><span>GİB & SGK Tebligat Kutusu</span></a></li>
            <li><a href="#" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-slate-800 hover:text-white transition-colors"><span>⚖️</span><span>Yasal Takip & İcra Dosyaları</span></a></li>
          </ul>
        </div>
      </nav>

      <div className="p-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500">
        <span>Cloudflare / Vercel</span>
        <span className="flex items-center space-x-1 text-emerald-400">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
          <span>Aktif</span>
        </span>
      </div>
    </aside>
  );
}