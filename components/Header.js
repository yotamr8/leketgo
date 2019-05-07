import Link from 'next/link'
import Head from 'next/head';

const Header = () => (
    <div>
        <Head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

            <link rel="stylesheet" href="https://cdn.rtlcss.com/bootstrap/v4.2.1/css/bootstrap.min.css"
                integrity="sha384-vus3nQHTD+5mpDiZ4rkEPlnkcyTP+49BhJ4wJeJunw06ZAp+wzzeBPUXr42fi8If" crossorigin="anonymous" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
                integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />

            <title>LeketGo</title>
        </Head>
    
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark position-sticky sticky-top">
        <Link href="/"><a class="navbar-brand">LeketGo</a></Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <Link href="/"><a class="nav-link">שיבוץ לאיסופים</a></Link>
                </li>
                <li class="nav-item">
                    <Link href="/assigned-tasks"><a class="nav-link">איסופים קרובים <span
                        class="badge badge-secondary">2</span></a></Link>
                </li>
                <li class="nav-item">
                    <Link href="/task-reports"><a class="nav-link">מילוי משוב <span
                        class="badge badge-secondary">2</span></a></Link>
                </li>
            </ul>
            <ul class="navbar-nav">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        אלון קגן
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                        <Link href="/personal-information"><a class="dropdown-item">פרטים אישיים</a></Link>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item">התנתקות</a>
                    </div>
                </li>
                <li class="nav-item">
                    <span class="nav-link"><i class="fas fa-map-marker-alt"></i> רעננה</span>
                </li>
            </ul>
        </div>
    </nav>
    </div>
)

export default Header