export default function Stats () {
    return (
<div className="relative">
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl"></div>
    <div className="relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
        <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl font-bold text-white">800+</div>
                <div className="text-sm text-gray-400 mt-2">Websites Shipped</div>
            </div>
            <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl font-bold text-white">1</div>
                <div className="text-sm text-gray-400 mt-2">Enterprise CMS</div>
            </div>
            <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl font-bold text-white">400+</div>
                <div className="text-sm text-gray-400 mt-2">Users Trained</div>
            </div>
            <div className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="text-3xl font-bold text-white">2</div>
                <div className="text-sm text-gray-400 mt-2">Design Systems</div>
            </div>
        </div>
    </div>
</div>
    );
}