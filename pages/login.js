import React from 'react';
import "../statics/styles.scss"
import Header from '../components/Header.js'
import Table from '../components/Table.js'

const Index = () => (
<div>
    <Header />
    <main class="m-2" style={{ paddingBottom: '3rem' }}>
    <div class="card">
            <h5 class="card-header">התחברות</h5>
            <div class="card-body">
                <h5 class="card-title">ברוכים הבאים ללקט־גו!</h5>
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">כתובת דואר אלקטרוני</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">סיסמה</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="customCheck3" />
                        <label class="custom-control-label" for="customCheck3">זכרוני</label>
                    </div>
                    <a href="#">שכחתי סיסמה</a>

                </form>
                <a role="button" href="volunteer-main.html" class="mt-2 btn btn-primary">התחברות</a>
            </div>
        </div>
    </main>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossOrigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"
        integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
        crossOrigin="anonymous"></script>
    <script src="https://cdn.rtlcss.com/bootstrap/v4.2.1/js/bootstrap.min.js"
        integrity="sha384-a9xOd0rz8w0J8zqj1qJic7GPFfyMfoiuDjC9rqXlVOcGO/dmRqzMn34gZYDTel8k"
        crossOrigin="anonymous"></script>
</div>
)
        
export default Index