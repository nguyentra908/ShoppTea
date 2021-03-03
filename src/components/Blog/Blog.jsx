import "./Blog.css";
import React, { Component } from "react";

class Blog extends Component {
  render() {
    return (
      <div className="container">
        <div className="blog">
          <div className="row">
            <div className="col-md-3 blog-slide">
              <h5
                style={{
                  textTransform: "uppercase",
                  marginBottom: "10px",
                  fontWeight: "bold",
                  fontSize: "20px",
                  textAlign: "center",
                }}
              >
                New Bogs
              </h5>
              <div className="blog_slidebar">
                <div className=" blog_new_contain">
                  <div className="row blog_new">
                    <div className="col-md-3 blog_new_img">
                      <img
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                        }}
                        src={`assets/images/blog1.jpg`}
                      />
                    </div>
                    <div className="col-md-9">
                      'Màu' Công Trí: Cuộc chơi của bản ngã và hy...
                    </div>
                  </div>
                  <hr className="line_separate"></hr>
                  <div className="row blog_new">
                    <div className="col-md-3 blog_new_img">
                      <img
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                        }}
                        src={`assets/images/blog2.jpg`}
                      />
                    </div>
                    <div className="col-md-9">
                      Xuân – hè 2021: cuộc sống đậm màu techni...
                    </div>
                  </div>
                  <hr className="line_separate"></hr>
                  <div className="row blog_new">
                    <div className="col-md-3 blog_new_img">
                      <img
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                        }}
                        src={`assets/images/blog4.jpg`}
                      />
                    </div>
                    <div className="col-md-9">
                      Phong cách đường phố lên ngôi với #vogue
                    </div>
                  </div>
                  <hr className="line_separate"></hr>
                  <div className="row blog_new">
                    <div className="col-md-3 blog_new_img">
                      <img
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                        }}
                        src={`assets/images/blog3.jpg`}
                      />
                    </div>
                    <div className="col-md-9">Mừng sinh nhật – trao tri ân</div>
                  </div>
                  <hr className="line_separate"></hr>
                  <div className="row blog_new">
                    <div className="col-md-3 blog_new_img">
                      <img
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%",
                        }}
                        src={`assets/images/blog5.jpg`}
                      />
                    </div>
                    <div className="col-md-9">
                      Tuần lễ thời trang và những điều bạn cần biết
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="row">
                <div className=" col-md-4 card-item  ">
                  <div className="card-contain">
                    <div className="image_card">
                      <img src={`assets/images/blog1.jpg`} />
                    </div>
                    <div className="card_info">
                      <h5 className="card_info_title">
                        'Màu' Công Trí: Cuộc chơi của bản ngã và hy vọng
                      </h5>
                      <hr className="line_separate"></hr>
                      <span>
                        Tối 3/12, sau gần hai năm trình diễn tại New York
                        Fashion Week, Công Trí trở lại sàn diễn TP…
                      </span>
                    </div>
                  </div>
                </div>

                <div className=" col-md-4 card-item  ">
                  <div className="card-contain">
                    <div className="image_card">
                      <img src={`assets/images/blog2.jpg`} />
                    </div>
                    <div className="card_info">
                      <h5 className="card_info_title">
                        Xuân – hè 2021: cuộc sống đậm màu technicolor
                      </h5>
                      <hr className="line_separate"></hr>
                      <span>
                        Kỹ thuật chế tác và màu sắc đẹp mê hồn kết hợp với nhau
                        trong bộ sưu tập Salvatore Ferragamo…
                      </span>
                    </div>
                  </div>
                </div>
                <div className=" col-md-4 card-item  ">
                  <div className="card-contain">
                    <div className="image_card">
                      <img src={`assets/images/blog4.jpg`} />
                    </div>
                    <div className="card_info">
                      <h5 className="card_info_title">
                        Phong cách đường phố lên ngôi với #vogue
                      </h5>
                      <hr className="line_separate"></hr>
                      <span>
                        Sự xuất hiện của #Vogue Street liệu có phải làn gió mới
                        trong xu hướng thời trang…
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className=" col-md-4 card-item  ">
                  <div className="card-contain">
                    <div className="image_card">
                      <img src={`assets/images/blog3.jpg`} />
                    </div>
                    <div className="card_info">
                      <h5 className="card_info_title">
                        Mừng sinh nhật – trao tri ân
                      </h5>
                      <hr className="line_separate"></hr>
                      <span>
                        Mừng tuổi lên 4 (10/12/2016 – 10/12/2020), TeaShop quyết
                        định dành cả tháng 12 này…
                      </span>
                    </div>
                  </div>
                </div>

                <div className=" col-md-4 card-item  ">
                  <div className="card-contain">
                    <div className="image_card">
                      <img src={`assets/images/blog5.jpg`} />
                    </div>
                    <div className="card_info">
                      <h5 className="card_info_title">
                        Tuần lễ thời trang và những điều bạn cần biết
                      </h5>
                      <hr className="line_separate"></hr>
                      <span>
                        Là cái nôi của nền kỹ nghệ Haute Couture, những xưởng
                        may (Atelier) bậc thầy và ngành thời trang hiện…
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-md-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
