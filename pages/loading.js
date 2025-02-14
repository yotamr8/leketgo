import Logo from '../components/Logo.js'
import '../static/styles.scss'

export default function Loading() {
    return (
        <div style={{
            display: 'flex',
            width: '100%',
            height: '100vh',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div style= {{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'

            }}>
                <img className="wiggle" src="/static/loading.png" width="100"/>
                <span style={{
                    fontSize: '20px',
                    marginTop: '10px'
                }}>בטעינה...</span>
            </div>
        </div>
    );
}