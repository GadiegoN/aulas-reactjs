import copyImg from '../assets/images/copy.svg';

import '../styles/room-code.scss';

type RoomCodeProps = {
    code: string;
}

export function RoomCode(props: RoomCodeProps) {
    function copyRoomcodeClipboard() {
        navigator.clipboard.writeText(props.code);
    }

    return (
        <button className="room-code" onClick={copyRoomcodeClipboard}>
            <div>
                <img src={copyImg} alt="Copiar codigo sala" />
            </div>
            <span>Sala #{props.code}</span>
        </button>
    );
}