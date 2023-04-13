import { Container } from "react-bootstrap";
import "./Register.css";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useState } from "react";
import Contact from "../Contact/Contact";
function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
    FirstName: "",
    fathername: "",
    LastName: "",
    birthday: "",
    idnumber: 0,
    IDtype: "",
    phonenumber: 0,
    nationality: "",
    Gender: "",
    Region: "",
    City: "",
  });
  const {
    email,
    password,
    name,
    password2,
    FirstName,
    fathername,
    LastName,
    birthday,
    idnumber,
    IDtype,
    phonenumber,
    nationality,
    Gender,
    Region,
    City,
  } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container className="text-center">
      <section style={{ paddingBottom: "30px" }} className="login-title">
        <h1>
          مستخدم جديد
          <AiOutlineUserAdd />
        </h1>
      </section>
      <form onSubmit={onSubmit}>
        <div className="grid">
          <div className="input-register">
            <label htmlFor="name"> اسم المستخدم</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="  اسم المستخدم"
              onChange={onChange}
              value={name}
            />
          </div>
          <div className="input-register">
            <label htmlFor="email"> البريد الألكتروني</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@domin.com"
              onChange={onChange}
              value={email}
            />
          </div>
          <div className="input-register">
            <label htmlFor="password">كلمة السر</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder=" كلمة السر"
              onChange={onChange}
              value={password}
            />
          </div>
          <div className="input-register">
            <label htmlFor="passwordtwo">تأكيد كلمة السر</label>
            <input
              type="password"
              name="passwordtwo"
              id="passwordtwo"
              placeholder="تأكيد كلمة السر"
              onChange={onChange}
              value={password2}
            />
          </div>
          <p className="info-notes" id="info">
            - يجب أن تحتوي كلمة مرورك على 8 أحرف على الأقل.
            <br />
            - لا يمكن أن تكون كلمة المرور الخاصة بك مشابهة جدًا لمعلوماتك
            الشخصية الأخرى.
            <br />
            - لا يمكن أن تكون كلمة مرورك كلمة مرور شائعة الاستخدام.
            <br />- لا يمكن أن تكون كلمة مرورك رقمية بالكامل.
          </p>
          <br />
          <div className="input-register">
            <label htmlFor="firstname">الاسم الأول</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="الاسم الأول"
              onChange={onChange}
              value={FirstName}
            />
          </div>
          <div className="input-register">
            <label htmlFor="fathername">اسم الأب</label>
            <input
              type="text"
              name="fathername"
              id="fathername"
              placeholder="اسم الأب"
              onChange={onChange}
              value={fathername}
            />
          </div>
          <div className="input-register">
            <label htmlFor="lastname">اسم العائلة</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="اسم العائلة"
              onChange={onChange}
              value={LastName}
            />
          </div>
          <div className="input-register">
            <label htmlFor="birthday">تاريخ الميلاد</label>
            <input
              type="date"
              name="birthday"
              id="birthday"
              placeholder="تأكيد كلمة السر"
              onChange={onChange}
              value={birthday}
            />
          </div>
          <div className="input-register">
            <label htmlFor="idnumber">الهوية</label>
            <input
              type="number"
              name="idnumber"
              id="idnumber"
              placeholder="الهوية"
              onChange={onChange}
              value={idnumber}
            />
          </div>
          <div className="input-register">
            <label htmlFor="IDtype">نوع الهوية</label>
            <select
              name="IDtype"
              id="IDtype"
              onChange={onChange}
              value={IDtype}
            >
              <option selected value="الهوية">
                الهوية
              </option>
              <option value="أقامة">أقامة</option>
              <option value="جواز سفر">جواز سفر</option>
            </select>
          </div>
          <div className="input-register">
            <label htmlFor="phonenumber">الجوال</label>
            <input
              type="number"
              name="phonenumber"
              id="phonenumber"
              placeholder="9665xxxxxxxxx"
              onChange={onChange}
              value={phonenumber}
            />
          </div>
          <div className="input-register">
            <label htmlFor="nationality">الجنسية</label>
            <select
              name="nationality"
              id="nationality"
              onChange={onChange}
              value={nationality}
            >
              <option value="أفغانستان">أفغانستان</option>
              <option value="ألبانيا">ألبانيا</option>
              <option value="الجزائر">الجزائر</option>
              <option value="أندورا">أندورا</option>
              <option value="أنغولا">أنغولا</option>
              <option value="أنتيغوا وباربودا">أنتيغوا وباربودا</option>
              <option value="الأرجنتين">الأرجنتين</option>
              <option value="أرمينيا">أرمينيا</option>
              <option value="أستراليا">أستراليا</option>
              <option value="النمسا">النمسا</option>
              <option value="أذربيجان">أذربيجان</option>
              <option value="البهاما">البهاما</option>
              <option value="البحرين">البحرين</option>
              <option value="بنغلاديش">بنغلاديش</option>
              <option value="باربادوس">باربادوس</option>
              <option value="بيلاروسيا">بيلاروسيا</option>
              <option value="بلجيكا">بلجيكا</option>
              <option value="بليز">بليز</option>
              <option value="بنين">بنين</option>
              <option value="بوتان">بوتان</option>
              <option value="بوليفيا">بوليفيا</option>
              <option value="البوسنة والهرسك ">البوسنة والهرسك </option>
              <option value="بوتسوانا">بوتسوانا</option>
              <option value="البرازيل">البرازيل</option>
              <option value="بروناي">بروناي</option>
              <option value="بلغاريا">بلغاريا</option>
              <option value="بوركينا فاسو ">بوركينا فاسو </option>
              <option value="بوروندي">بوروندي</option>
              <option value="كمبوديا">كمبوديا</option>
              <option value="الكاميرون">الكاميرون</option>
              <option value="كندا">كندا</option>
              <option value="الرأس الأخضر">الرأس الأخضر</option>
              <option value="جمهورية أفريقيا الوسطى ">
                جمهورية أفريقيا الوسطى{" "}
              </option>
              <option value="تشاد">تشاد</option>
              <option value="تشيلي">تشيلي</option>
              <option value="الصين">الصين</option>
              <option value="كولومبيا">كولومبيا</option>
              <option value="جزر القمر">جزر القمر</option>
              <option value="كوستاريكا">كوستاريكا</option>
              <option value="ساحل العاج">ساحل العاج</option>
              <option value="كرواتيا">كرواتيا</option>
              <option value="كوبا">كوبا</option>
              <option value="قبرص">قبرص</option>
              <option value="التشيك">التشيك</option>
              <option value="جمهورية الكونغو الديمقراطية">
                جمهورية الكونغو الديمقراطية
              </option>
              <option value="الدنمارك">الدنمارك</option>
              <option value="جيبوتي">جيبوتي</option>
              <option value="دومينيكا">دومينيكا</option>
              <option value="جمهورية الدومينيكان">جمهورية الدومينيكان</option>
              <option value="تيمور الشرقية ">تيمور الشرقية </option>
              <option value="الإكوادور">الإكوادور</option>
              <option value="مصر">مصر</option>
              <option value="السلفادور">السلفادور</option>
              <option value="غينيا الاستوائية">غينيا الاستوائية</option>
              <option value="إريتريا">إريتريا</option>
              <option value="إستونيا">إستونيا</option>
              <option value="إثيوبيا">إثيوبيا</option>
              <option value="فيجي">فيجي</option>
              <option value="فنلندا">فنلندا</option>
              <option value="فرنسا">فرنسا</option>
              <option value="الغابون">الغابون</option>
              <option value="غامبيا">غامبيا</option>
              <option value="جورجيا">جورجيا</option>
              <option value="ألمانيا">ألمانيا</option>
              <option value="غانا">غانا</option>
              <option value="اليونان">اليونان</option>
              <option value="جرينادا">جرينادا</option>
              <option value="غواتيمالا">غواتيمالا</option>
              <option value="غينيا">غينيا</option>
              <option value="غينيا بيساو">غينيا بيساو</option>
              <option value="غويانا">غويانا</option>
              <option value="هايتي">هايتي</option>
              <option value="هندوراس">هندوراس</option>
              <option value="المجر">المجر</option>
              <option value="آيسلندا">آيسلندا</option>
              <option value="الهند">الهند</option>
              <option value="إندونيسيا">إندونيسيا</option>
              <option value="إيران">إيران</option>
              <option value="العراق">العراق</option>
              <option value="جمهورية أيرلندا ">جمهورية أيرلندا </option>
              <option value="فلسطين">فلسطين</option>
              <option value="إيطاليا">إيطاليا</option>
              <option value="جامايكا">جامايكا</option>
              <option value="اليابان">اليابان</option>
              <option value="الأردن">الأردن</option>
              <option value="كازاخستان">كازاخستان</option>
              <option value="كينيا">كينيا</option>
              <option value="كيريباتي">كيريباتي</option>
              <option value="الكويت">الكويت</option>
              <option value="قرغيزستان">قرغيزستان</option>
              <option value="لاوس">لاوس</option>
              <option value="لاوس">لاوس</option>
              <option value="لاتفيا">لاتفيا</option>
              <option value="لبنان">لبنان</option>
              <option value="ليسوتو">ليسوتو</option>
              <option value="ليبيريا">ليبيريا</option>
              <option value="ليبيا">ليبيا</option>
              <option value="ليختنشتاين">ليختنشتاين</option>
              <option value="ليتوانيا">ليتوانيا</option>
              <option value="لوكسمبورغ">لوكسمبورغ</option>
              <option value="مدغشقر">مدغشقر</option>
              <option value="مالاوي">مالاوي</option>
              <option value="ماليزيا">ماليزيا</option>
              <option value="جزر المالديف">جزر المالديف</option>
              <option value="مالي">مالي</option>
              <option value="مالطا">مالطا</option>
              <option value="جزر مارشال">جزر مارشال</option>
              <option value="موريتانيا">موريتانيا</option>
              <option value="موريشيوس">موريشيوس</option>
              <option value="المكسيك">المكسيك</option>
              <option value="مايكرونيزيا">مايكرونيزيا</option>
              <option value="مولدوفا">مولدوفا</option>
              <option value="موناكو">موناكو</option>
              <option value="منغوليا">منغوليا</option>
              <option value="الجبل الأسود">الجبل الأسود</option>
              <option value="المغرب">المغرب</option>
              <option value="موزمبيق">موزمبيق</option>
              <option value="بورما">بورما</option>
              <option value="ناميبيا">ناميبيا</option>
              <option value="ناورو">ناورو</option>
              <option value="نيبال">نيبال</option>
              <option value="هولندا">هولندا</option>
              <option value="نيوزيلندا">نيوزيلندا</option>
              <option value="نيكاراجوا">نيكاراجوا</option>
              <option value="النيجر">النيجر</option>
              <option value="نيجيريا">نيجيريا</option>
              <option value="كوريا الشمالية ">كوريا الشمالية </option>
              <option value="النرويج">النرويج</option>
              <option value="سلطنة عمان">سلطنة عمان</option>
              <option value="باكستان">باكستان</option>
              <option value="بالاو">بالاو</option>
              <option value="بنما">بنما</option>
              <option value="بابوا غينيا الجديدة">بابوا غينيا الجديدة</option>
              <option value="باراغواي">باراغواي</option>
              <option value="بيرو">بيرو</option>
              <option value="الفلبين">الفلبين</option>
              <option value="بولندا">بولندا</option>
              <option value="البرتغال">البرتغال</option>
              <option value="قطر">قطر</option>
              <option value="جمهورية الكونغو">جمهورية الكونغو</option>
              <option value="جمهورية مقدونيا">جمهورية مقدونيا</option>
              <option value="رومانيا">رومانيا</option>
              <option value="روسيا">روسيا</option>
              <option value="رواندا">رواندا</option>
              <option value="سانت كيتس ونيفيس">سانت كيتس ونيفيس</option>
              <option value="سانت لوسيا">سانت لوسيا</option>
              <option value="سانت فنسينت والجرينادينز">
                سانت فنسينت والجرينادينز
              </option>
              <option value="ساموا">ساموا</option>
              <option value="سان مارينو">سان مارينو</option>
              <option value="ساو تومي وبرينسيب">ساو تومي وبرينسيب</option>
              <option selected value="السعودية">
                السعودية
              </option>
              <option value="السنغال">السنغال</option>
              <option value="صربيا">صربيا</option>
              <option value="سيشيل">سيشيل</option>
              <option value="سيراليون">سيراليون</option>
              <option value="سنغافورة">سنغافورة</option>
              <option value="سلوفاكيا">سلوفاكيا</option>
              <option value="سلوفينيا">سلوفينيا</option>
              <option value="جزر سليمان">جزر سليمان</option>
              <option value="الصومال">الصومال</option>
              <option value="جنوب أفريقيا">جنوب أفريقيا</option>
              <option value="كوريا الجنوبية">كوريا الجنوبية</option>
              <option value="جنوب السودان">جنوب السودان</option>
              <option value="إسبانيا">إسبانيا</option>
              <option value="سريلانكا">سريلانكا</option>
              <option value="السودان">السودان</option>
              <option value="سورينام">سورينام</option>
              <option value="سوازيلاند">سوازيلاند</option>
              <option value="السويد">السويد</option>
              <option value="سويسرا">سويسرا</option>
              <option value="سوريا">سوريا</option>
              <option value="طاجيكستان">طاجيكستان</option>
              <option value="تنزانيا">تنزانيا</option>
              <option value="تايلاند">تايلاند</option>
              <option value="توغو">توغو</option>
              <option value="تونجا">تونجا</option>
              <option value="ترينيداد وتوباغو">ترينيداد وتوباغو</option>
              <option value="تونس">تونس</option>
              <option value="تركيا">تركيا</option>
              <option value="تركمانستان">تركمانستان</option>
              <option value="توفالو">توفالو</option>
              <option value="أوغندا">أوغندا</option>
              <option value="أوكرانيا">أوكرانيا</option>
              <option value="الإمارات العربية المتحدة">
                الإمارات العربية المتحدة
              </option>
              <option value="المملكة المتحدة">المملكة المتحدة</option>
              <option value="الولايات المتحدة">الولايات المتحدة</option>
              <option value="أوروغواي">أوروغواي</option>
              <option value="أوزبكستان">أوزبكستان</option>
              <option value="فانواتو">فانواتو</option>
              <option value="فنزويلا">فنزويلا</option>
              <option value="فيتنام">فيتنام</option>
              <option value="اليمن">اليمن</option>
              <option value="زامبيا">زامبيا</option>
              <option value="زيمبابوي">زيمبابوي</option>
            </select>
          </div>
          <div className="input-register">
            <label htmlFor="Gender">الجنس</label>
            <select
              name="Gender"
              id="Gender"
              onChange={onChange}
              value={Gender}
            >
              <option selected value="ذكر">
                ذكر
              </option>
              <option value="أنثى">أنثى</option>
            </select>
          </div>
          <div className="input-register">
            <label htmlFor="Region">المنطقة</label>
            <select
              name="Region"
              id="Region"
              onChange={onChange}
              value={Region}
            >
              <option selected value="الرياض">
                الرياض
              </option>
              <option value="المنطقة الشرقية">المنطقة الشرقية</option>
              <option value="مكة المكرمة">مكة المكرمة</option>
              <option value="المدينة المنورة">المدينة المنورة</option>
              <option value="القصيم">القصيم</option>
              <option value="عسير">عسير</option>
              <option value="تبوك">تبوك</option>
              <option value="حائل">حائل</option>
              <option value="الحدود الشمالية">الحدود الشمالية</option>
              <option value="جازان">جازان</option>
              <option value="نجران">نجران</option>
              <option value="الباحة">الباحة</option>
              <option value="الجوف">الجوف</option>
            </select>
          </div>
          <div className="input-register end" id="end">
            <label htmlFor="City">المدينة</label>
            <select name="City" id="City" onChange={onChange} value={City}>
              <option selected value="الرياض">
                الرياض
              </option>
              <option value="المنطقة الشرقية">المنطقة الشرقية</option>
              <option value="مكة المكرمة">مكة المكرمة</option>
              <option value="المدينة المنورة">المدينة المنورة</option>
              <option value="القصيم">القصيم</option>
              <option value="عسير">عسير</option>
              <option value="تبوك">تبوك</option>
              <option value="حائل">حائل</option>
              <option value="الحدود الشمالية">الحدود الشمالية</option>
              <option value="جازان">جازان</option>
              <option value="نجران">نجران</option>
              <option value="الباحة">الباحة</option>
              <option value="الجوف">الجوف</option>
            </select>
          </div>
        </div>
        <div className="submit">
          <button
            style={{ padding: "25px 100px", fontSize: "2rem" }}
            type="submit"
            className="submit"
          >
            تسجيل المستخدم{" "}
            <AiOutlineUserAdd
              style={{ marginRight: "12px", fontSize: "2rem" }}
            />
          </button>
        </div>
      </form>
      <Contact />
    </Container>
  );
}

export default Register;
