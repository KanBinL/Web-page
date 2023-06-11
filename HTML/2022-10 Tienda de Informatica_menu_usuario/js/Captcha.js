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
			image[1]="fotos/Captcha.png";
			image[2]="fotos/Captcha1.jpg";
			image[3]="fotos/Captcha2.jpg";
			image[4]="fotos/Captcha3.png";
			image[5]="fotos/Captcha4.png";
			image[6]="fotos/Captcha5.png";
			image[7]="fotos/Captcha6.png";
			image[8]="fotos/Captcha7.png";
			image[9]="fotos/Captcha8.png";
// Para generar captchar aleatorios