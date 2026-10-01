import React, { useState } from 'react'
import { MicIcon, MicOffIcon, VideoIcon, VideoOffIcon, MessageSquareIcon, UsersIcon, PhoneOffIcon, CopyIcon, CheckIcon } from 'lucide-react'
import toast from 'react-hot-toast'

const ControlBar = ({roomId, audioEnabled, videoEnabled, onToggleAudio, onToggleVideo, onToggleChat, onToggleParticipants, isChatOpen, isParticipantsOpen, unreadCount, participantCount, isHost, onLeave, onEndMeeting}) => {

    const [copied, setCopied] = useState(false)

    const copyMeetingId = () =>{
        navigator.clipboard.writeText(window.location.href)
        setCopied(true)
        toast.success("Meeting link copied!")
        setTimeout(()=>setCopied(false), 2000)
    }

    return (
        <footer className="w-full bg-white/90 backdrop-blur-md border-t border-slate-200/80 px-6 py-4 flex items-center justify-between z-40 shadow-lg shadow-slate-200/50">
            {/* Left Info / Copy Link */}
            <div className="hidden sm:flex items-center gap-3">
                <span className="text-xs font-medium text-slate-600 font-mono tracking-wider">Id: {roomId}</span>
                <button onClick={copyMeetingId} className='p-2 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 hover:text-slate-900 flex items-center gap-1.5 text-xs font-medium cursor-pointer transition-all'>
                    {copied ? <CheckIcon className="w-3.5 h-3.5 text-emerald-600"/> : <CopyIcon className="w-3.5 h-3.5" />}
                    <span>{copied ? "Copied" : "Copy Link"}</span>
                </button>
            </div>

            {/* Center Controls */}
            <div className="flex items-center gap-3 mx-auto sm:mx-0">
                {/* Audio Toggle */}
                <button onClick={onToggleAudio} className={`p-3.5 rounded-2xl transition-all cursor-pointer border ${audioEnabled ? "bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300 shadow-xs" : "bg-rose-50 hover:bg-rose-100 text-rose-600 border-rose-200 shadow-xs"}`} title={audioEnabled ? "Mute Microphone" : "Unmute Microphone"}>
                    {audioEnabled ? <MicIcon className="w-5 h-5" /> : <MicOffIcon className="w-5 h-5" />}
                </button>

                {/* Video Toggle */}
                <button onClick={onToggleVideo} className={`p-3.5 rounded-2xl transition-all cursor-pointer border ${videoEnabled ? "bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300 shadow-xs" : "bg-rose-50 hover:bg-rose-100 text-rose-600 border-rose-200 shadow-xs"}`} title={videoEnabled ? "Turn Off Camera" : "Turn On Camera"}>
                    {videoEnabled ? <VideoIcon className="w-5 h-5" /> : <VideoOffIcon className="w-5 h-5" />}
                </button>

                {/* Chat Toggle */}
                <button onClick={onToggleChat} className={`p-3.5 rounded-2xl transition-all cursor-pointer border relative ${isChatOpen ? "bg-primary text-white border-primary shadow-xs" : "bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300 shadow-xs"}`} title="Chat">
                    <MessageSquareIcon className="w-5 h-5" />
                    {unreadCount > 0 && (
                        <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                            {unreadCount}
                        </span>
                    )}
                </button>

                {/* Participants Toggle */}
                <button onClick={onToggleParticipants} className={`relative p-3.5 rounded-2xl transition-all cursor-pointer border relative ${isParticipantsOpen ? "bg-primary text-white border-primary shadow-xs" : "bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300 shadow-xs"}`} title="Participants">
                    <UsersIcon className="w-5 h-5" />
                    {participantCount > 0 && (
                        <span className="absolute -top-1 -right-1 bg-slate-700 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                            {participantCount}
                        </span>
                    )}
                </button>

                {/* Leave / End Meeting Controls */}
                <div className="flex items-center gap-2 ml-2">
                    <button onClick={onLeave} className="px-4 py-3 rounded-2xl bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 text-sm font-medium transition-all cursor-pointer shadow-xs flex items-center gap-2">
                        <PhoneOffIcon className="w-4 h-4" />
                        <span className="hidden md:inline">Leave</span>
                    </button>
                    
                    {isHost && (
                        <button onClick={onEndMeeting} className="px-4 py-3 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white text-sm font-medium transition-all cursor-pointer shadow-xs">
                            End Meeting
                        </button>
                    )}
                </div>
            </div>

            {/* Right placeholder */}
            <div className="hidden sm:block w-[120px]"></div>
        </footer>
    )
}

export default ControlBar