
interface ToggleProps{
    isDark: Boolean,
    handleDark: () => void
}

export default function Toggle({ isDark, handleDark }:ToggleProps){
    return(
        <div onClick={handleDark} className="h-5 w-12 rounded-lg bg-gray-400 cursor-pointer relative dark:bg-gray-800">
            <div className={`rounded-2xl h-full w-6 bg-white absolute ${isDark ? 'right-0' : 'left-0'}`}></div>
        </div>
    )
}