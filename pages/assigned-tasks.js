import React from 'react';
import "../statics/styles.scss"
import Header from '../components/Header.js'
import Table from '../components/Table.js'

const Assigned_tasks = () => (
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
                  </div>
              </div>
          </div>

          <div class="alert alert-info" role="alert">
              הוראות לחלון זה
          </div>
          <div class="mb-4 mt-4">
              <h2>איסופים קרובים </h2>
          </div>
          <Table page={'assigned_tasks'}/>
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
          
  export default Assigned_tasks