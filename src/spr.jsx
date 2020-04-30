import React from 'react';
import { Button, Form } from 'bootstrap-4-react';

class SprDo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            spr: JSON.parse(localStorage.getItem('spr'))
        };

    }



    add() {



        var city = this.refs.city.value;

        var soname = this.refs.soname.value;

        var name = this.refs.name.value;

        var patronymic = this.refs.patronymic.value;

        var number = this.refs.number.value;

        const arr = [city, soname, name, patronymic, number];

        if(localStorage.getItem('spr') == null) {
        var spr = [];

        spr.push(arr);

        localStorage.setItem('spr', JSON.stringify(spr));
        } else  {

            var spr = JSON.parse(localStorage.getItem('spr'));

            spr.push(arr);

            localStorage.setItem('spr', JSON.stringify(spr));

            alert("Контакт был успешно добавлен в список!");

            var cityes = '/city/';

            this.props.history.push(cityes + city);
        }
        this.setState({
            spr: JSON.parse(localStorage.getItem('spr'))
        });
        this.refs.city.value ="";

        this.refs.soname.value = "";

        this.refs.name.value = "";

        this.refs.patronymic.value = "";

        this.refs.number.value = "";
    }

    delete(e) {
        var index = e.target.getAttribute('data-key');

        var list = JSON.parse(localStorage.getItem('spr'));

        list.splice(index, 1);

        this.setState({
            
            spr: list
        });
        localStorage.setItem('spr', JSON.stringify(list));

        alert("Контакт был успешно удален!");
    }

    update(e) {
        var index = e.target.getAttribute('data-key');

        var list = JSON.parse(localStorage.getItem('spr'));

        var lists = list[index];
                this.refs.city.value = lists[0];
                
                this.refs.soname.value = lists[1];

                this.refs.name.value = lists[2];

                this.refs.patronymic.value = lists[3];

                this.refs.number.value = lists[4];
           }


    updates(e) {
        var index = e.target.getAttribute('data-key');

        var city = this.refs.city.value;

        var soname = this.refs.soname.value;

        var name = this.refs.name.value;

        var patronymic = this.refs.patronymic.value;

        var number = this.refs.number.value;

        const arr = [city, soname, name, patronymic, number];

        var index = e.target.getAttribute('data-key');   

            var spr = JSON.parse(localStorage.getItem('spr'));

            spr[index]=arr;

            localStorage.setItem('spr', JSON.stringify(spr));

  
        this.setState({spr});

        this.refs.city.value ="";

        this.refs.soname.value = "";

        this.refs.name.value = "";

        this.refs.patronymic.value = "";

        this.refs.number.value = "";

        alert("Контакт был успешно изменен!");
    }


       






    render() {

        return (
            <div>                   
                <div class="container text-center" >
                    <h3>Новый контакт</h3>
                    <div className="form-group">
                    <input className="form-control" name="city" list="city" placeholder="Выберите или введите Город" ref="city" />
                    <datalist id="city">
                        <option value="Чита">Чита</option>
                        <option value="Москва">Москва</option>
                        <option value="Краснокаменск">Краснокаменск</option>
                    </datalist>
                    </div>
                    <div className="form-group">
                    <input className="form-control" type="text" name="soname" placeholder="Фамилия" ref="soname" required="required"/>
                    </div>
                    <div className="form-group">
                    <input className="form-control" type="text" name="name" placeholder="Имя" ref="name" required="required" />
                    </div>
                    <div className="form-group">
                    <input className="form-control" type="text" name="patronymic" placeholder="Отчество" ref="patronymic" required="required"/>
                    </div>
                    <div className="form-group">
                    <input className="form-control" type="number" placeholder="Номер телефона" ref="number" required="required"/>
                    </div>
                    <div className="form-group">
                    <input className="btn btn-primary" type="button" value="Добавить контакт" onClick={this.add.bind(this)} />
                    </div>
                    </div>

                <div class="container">
                    <div class="row">
                        <div class="col-12">

                            <table class="table" style={{ align: "center" }}>
                                <tr>
                                    <th>Город</th>
                                    <th>Фамилия</th>
                                    <th>Имя</th>
                                    <th>Отчество</th>
                                    <th>Номер телефона</th>
                                    <th>Действия</th>
                                </tr>

                                {this.state.spr.map(function (work, index) {
                                    if (work[0] == this.props.match.params.id) {
                                        return (
                                            <tr>
                                                <td>{work[0]}</td>
                                                <td>{work[1]}</td>
                                                <td>{work[2]}</td>
                                                <td>{work[3]}</td>
                                                <td>{work[4]}</td>
                                                <td>
                                                <ul className="iconmenu">
                                                <li><input className="delete" type="button" value="" data-key={index} onClick={this.delete.bind(this)} title="Удалить запись"></input></li>
                                                <li><input className="choose" type="button" value="" data-key={index} onClick={this.update.bind(this)} title="Выбрать для редактирования"></input></li>
                                                <li><input className="update" type="button" value=""  data-key={index} onClick= {this.updates.bind(this)} title="Сохранить изменения"></input></li>
                                                </ul>
        
                                               </td>
                                            </tr>); 
                                    }
                                }, this)}


                            </table>


                        </div>
                    </div>
                </div>
            </div>
        );
    }


}

export default SprDo;


