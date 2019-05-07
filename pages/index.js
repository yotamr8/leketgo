import React from 'react';
import "../statics/styles.scss"
import Header from '../components/Header.js'

const Index = () => (
    <div>
        
            <Header />
            <main class="m-2" style={{ paddingBottom: '3rem' }}>
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">הצלחה</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                האיסופים שובצו בהצלחה! ניתן לראות את כל השיבוצים שלך בעמוד <a href="volunteer-track.html">איסופים קרובים</a>.
                </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">סגירה</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="alert alert-warning" role="alert">
                    היי אלון, יש לך <a href="volunteer-track.html"><strong>2</strong> איסופים קרובים</a> ועוד <a
                        href="volunteer-report.html"><strong>2</strong> איסופים הממתינים למשוב</a>.
        </div>
                <div class="alert alert-info" role="alert">
                    הוראות לחלון זה
        </div>
                <div class="mb-4 mt-4">
                    <h2>שיבוץ לאיסופים </h2>
                </div>
                <div class="table-responsive">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">פעולות</th>
                                <th scope="col">מועד</th>
                                <th scope="col">עיר</th>
                                <th scope="col">מקום</th>
                                <th scope="col">קייטרינג</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="customCheck1" />
                                        <label class="custom-control-label" for="customCheck1"></label>
                                    </div>
                                </th>
                                <td>יום ה' 2/5/19 12:30</td>
                                <td>כפר סבא</td>
                                <td>אלכס צמיגים</td>
                                <td>קייטרינג מאמא</td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="customCheck2" />
                                        <label class="custom-control-label" for="customCheck2"></label>
                                    </div>
                                </th>
                                <td>יום ה' 2/5/19 12:30</td>
                                <td>רמת השרון</td>
                                <td>סימה אופנה אופנתית</td>
                                <td>הבוסתן</td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="customCheck3" />
                                        <label class="custom-control-label" for="customCheck3"></label>
                                    </div>
                                </th>
                                <td>יום ה' 2/5/19 12:30</td>
                                <td>נתניה</td>
                                <td>המכולת השכונתית של יעקב</td>
                                <td>שיפמן קייטרינג לאירועים</td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="customCheck4" />
                                        <label class="custom-control-label" for="customCheck4"></label>
                                    </div>
                                </th>
                                <td>יום ה' 2/5/19 12:30</td>
                                <td>נתניה</td>
                                <td>המכולת השכונתית של יעקב</td>
                                <td>שיפמן קייטרינג לאירועים</td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="customCheck5" />
                                        <label class="custom-control-label" for="customCheck5"></label>
                                    </div>
                                </th>
                                <td>יום ה' 2/5/19 12:30</td>
                                <td>נתניה</td>
                                <td>המכולת השכונתית של יעקב</td>
                                <td>שיפמן קייטרינג לאירועים</td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="customCheck6" />
                                        <label class="custom-control-label" for="customCheck6"></label>
                                    </div>
                                </th>
                                <td>יום ה' 2/5/19 12:30</td>
                                <td>נתניה</td>
                                <td>המכולת השכונתית של יעקב</td>
                                <td>שיפמן קייטרינג לאירועים</td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="customCheck7" />
                                        <label class="custom-control-label" for="customCheck7"></label>
                                    </div>
                                </th>
                                <td>יום ה' 2/5/19 12:30</td>
                                <td>נתניה</td>
                                <td>המכולת השכונתית של יעקב</td>
                                <td>שיפמן קייטרינג לאירועים</td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="customCheck8" />
                                        <label class="custom-control-label" for="customCheck8"></label>
                                    </div>
                                </th>
                                <td>יום ה' 2/5/19 12:30</td>
                                <td>נתניה</td>
                                <td>המכולת השכונתית של יעקב</td>
                                <td>שיפמן קייטרינג לאירועים</td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="customCheck9" />
                                        <label class="custom-control-label" for="customCheck9"></label>
                                    </div>
                                </th>
                                <td>יום ה' 2/5/19 12:30</td>
                                <td>נתניה</td>
                                <td>המכולת השכונתית של יעקב</td>
                                <td>שיפמן קייטרינג לאירועים</td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="customCheck10" />
                                        <label class="custom-control-label" for="customCheck10"></label>
                                    </div>
                                </th>
                                <td>יום ה' 2/5/19 12:30</td>
                                <td>נתניה</td>
                                <td>המכולת השכונתית של יעקב</td>
                                <td>שיפמן קייטרינג לאירועים</td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <div class="custom-control custom-checkbox">
                                        <input type="checkbox" class="custom-control-input" id="customCheck11" />
                                        <label class="custom-control-label" for="customCheck11"></label>
                                    </div>
                                </th>
                                <td>יום ה' 2/5/19 12:30</td>
                                <td>נתניה</td>
                                <td>המכולת השכונתית של יעקב</td>
                                <td>שיפמן קייטרינג לאירועים</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="p-2 position-fixed fixed-bottom bg-light">
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">שיבוץ איסופים</button>
                        <button type="button" class="btn btn-secondary">ביטול</button>
                    </div>
                </div>
            </main>
            <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
                integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
                crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js"
                integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
                crossorigin="anonymous"></script>
            <script src="https://cdn.rtlcss.com/bootstrap/v4.2.1/js/bootstrap.min.js"
                integrity="sha384-a9xOd0rz8w0J8zqj1qJic7GPFfyMfoiuDjC9rqXlVOcGO/dmRqzMn34gZYDTel8k"
                crossorigin="anonymous"></script>
        </div>
        )
        
  export default Index