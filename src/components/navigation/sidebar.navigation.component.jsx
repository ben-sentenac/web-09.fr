import ThemeSwitcher from '../buttons/theme-switcher.button.component';
import './sidebar.css';

function Sidebar() {
    return (
        <section id="Sidebar" className="text-dark dark:text-white">
            <ThemeSwitcher />
            <div className="inner">
                <nav>
                    <ul>
                        <li><a href="#intro" className="scrolly active">Welcome</a></li>
                        <li><a href="#one" className="scrolly">Who we are</a></li>
                        <li><a href="#two" className="scrolly">What we do</a></li>
                        <li><a href="#three" className="scrolly">Get in touch</a></li>
                    </ul>
                </nav>
            </div>
        </section>
    );
}


export default Sidebar;