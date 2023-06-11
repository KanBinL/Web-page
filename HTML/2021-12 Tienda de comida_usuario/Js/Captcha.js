function makeArray(n) 
			{
				this.length = n;
				for (var i=1; i<=n; i++) 
				{
					this[i] = "";
				}
				return this;
			}
			var i;
			function imagealeatoire() 
			{
				i = Math.floor(9 * Math.random() + 1);
				return image[i];
			}
			image = new makeArray(10);
			image[1]="Imagen/Captcha.png";
			image[2]="Imagen/Captcha1.jpg";
			image[3]="Imagen/Captcha2.jpg";
			image[4]="Imagen/Captcha3.png";
			image[5]="Imagen/Captcha4.png";
			image[6]="Imagen/Captcha5.png";
			image[7]="Imagen/Captcha6.png";
			image[8]="Imagen/Captcha7.png";
			image[9]="Imagen/Captcha8.png";
// Para generar captchar aleatorios