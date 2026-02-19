export default function Shimmer() {
    return (
        <div className="animate-pulse">
            {/* Thumbnail */}
            <div className="w-full aspect-video bg-[#222] rounded-xl"></div>

            {/* Text row */}
            <div className="flex gap-3 mt-3">
                {/* fake avatar */}
                <div className="w-9 h-9 bg-[#222] rounded-full"></div>

                <div className="flex-1">
                    <div className="h-4 bg-[#222] rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-[#222] rounded w-1/2"></div>
                </div>
            </div>
        </div>
    );
}