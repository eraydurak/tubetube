import React from "react";
import "./LeftSide.scss";

const LeftSide = () => {
	return (
		<div className="leftside">
			<div className="first">
				<a href="#">
					<span>🏠 </span> Anasayfa
				</a>
				<a href="#">
					<span>💬</span> Keşfet
				</a>
				<a href="#">
					<span>❤</span> Abonelikler
				</a>
			</div>
			<hr />
			<div className="second">
				<a href="#">
					<span>📚</span> Kitaplık
				</a>
				<a href="#">
					{" "}
					<span>⏰</span> Geçmiş
				</a>
				<a href="#">
					{" "}
					<span> ▶ </span> Videolarınız
				</a>
				<a href="#">
					<span>⏱</span> Daha sonra izle
				</a>
				<a href="#">
					<span>👍</span> Beğendiğim videolar
				</a>
			</div>
			<hr />
			<div className="third">
				<div className="baslik">
					<p>Abonelikler</p>
				</div>
				<a href="#">Birinci</a>
				<a href="#">İkinci</a>
				<a href="#">Ucuncu</a>
				<a href="#">Dorduncu</a>
				<a href="#">Besinci</a>
			</div>
			<hr />
			<div className="fourth">
				<div className="baslik">
					<p>Youtube'dan daha fazla icerik</p>
				</div>
				<a href="#"> 📽 Youtube Premium </a>
				<a href="#"> 🎮 Oyun </a>
				<a href="#"> 🚗 Canlı </a>
				<a href="#"> 🏉 Spor </a>
			</div>
			<hr></hr>
			<div className="fifth">
				<a href="#"> 🌚 Ayarlar </a>
				<a href="#"> 🏁 İçerik bildirme geçmişi </a>
				<a href="#"> ❓ Yardım </a>
				<a href="#"> 🏁 Geri bildirim gönder </a>
			</div>
			<div className="last">
				<p>
					HakkındaBasınTelif hakkıBize ulaşınİçerik Üreticiler Reklam verme
					<br />
					Geliştiriciler Şartlar Gizlilik Politika ve Güvenlik
					<br />
					YouTube Nasıl Çalışıyor? Yeni özellikleri deneyin ©
					<br />
					2021 Google LLC
				</p>
			</div>
		</div>
	);
};

export default LeftSide;
