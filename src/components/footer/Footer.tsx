import { GithubLogo, FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {
    return (
        <footer className="bg-emerald-300 text-white py-4 fixed bottom-0 w-full text-center">
            <p className='text-xl font-bold'>Farmacia Brasil - Numero 1 em vendas no Brasil !!</p>
            <p className='text-lg'>Acesse nossas redes sociais</p>
            <div className='flex justify-center gap-3 py-1'>
                <a href="https://github.com/MatheusSoares48" target='_blank'><GithubLogo size={40} weight='bold'/></a>
                <a href="" target='_blank'><LinkedinLogo size={40} weight='bold' /></a>
                <a href="" target='_blank'><FacebookLogo size={40} weight='bold' /></a>
                <a href="" target='_blank'><InstagramLogo size={40} weight='bold' /></a>
            </div>
        </footer>
    );
}

export default Footer;
