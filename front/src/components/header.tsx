import logoTicou from "../assets/images/logo-comfundo.png";

export function Header() {
    return (
        <header>
            <img src={logoTicou} alt="logo ticou" className='w-[200px]' />
        </header>
        
    )
}