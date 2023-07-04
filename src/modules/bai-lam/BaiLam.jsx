import { Component } from "react";
import {} from "module";
import { glass } from "./data.js";
export default class BaiLam extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: 7,
        };
    }
    /**
     * hàm xử lí sự kiện khi người dùng click chọn glass
     * @id {number}: mã sản phẩm mà người dùng đã click
     * @return {undefined}
     */
    choose = (id) => {
        this.setState({
            clicked: id,
        });
    };
    /**
     * hàm tìm sản phẩm mà người dùng đã click
     * @str {string}: thông tin cần trả về (là các thuộc tính của đối tượng trong mảng glass "./data.js")
     * @return {string} thông tin của thuộc tính cần trả về
     */
    findItem = (str) => {
        let ht = glass.find((n) => n.id === this.state.clicked);
        return ht[str];
    };
    render() {
        return (
            <>
                <div>
                    <h1 className="title">try glasses app online</h1>
                    <div className="container">
                        <div className="preview">
                            <div className="preview__item preview__left">
                                <img
                                    className="preview__model"
                                    src="./src/assets/img/model.jpg"
                                    alt="err"
                                />
                                <img
                                    className="preview__glass"
                                    src={
                                        "./src/assets/img/v" +
                                        this.state.clicked +
                                        ".png"
                                    }
                                    alt="err"
                                />
                                <div className="preview__content">
                                    <h3>{this.findItem("name")}</h3>
                                    <p>{this.findItem("desc")}</p>
                                </div>
                            </div>
                            <div className="preview__item preview__right">
                                <img
                                    src="./src/assets/img/model.jpg"
                                    alt="err"
                                />
                            </div>
                        </div>
                        <div className="list-glass">
                            {glass.map((ele) => {
                                return (
                                    <div
                                        onClick={() => {
                                            this.choose(ele.id);
                                        }}
                                        key={ele.id}
                                    >
                                        <img src={ele.url} alt="err" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
