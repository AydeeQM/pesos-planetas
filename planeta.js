  var usuario = prompt("Cual es tu peso?");
  var planeta = parseInt(prompt("Elige tu planeta\n 1. Marte\n 2. Jupiter\n 3. Venus\n 4. Urano\n 5. Saturno\n 6.Neptuno\n 7.Pluton "));
  var peso = parseInt(usuario);
  var g_tierra = 9.8;
  var g_marte = 3.7;
  var g_jupiter = 24.8;
  var g_venus = 8.9;
  var g_urano = 8.7;
  var g_saturno = 10.44;
  var g_neptuno = 11.15;
  var g_pluton = 0.62;
  var peso_final;
  var nombre;
  if(planeta == 1)
  {
    peso_final = peso * g_marte / g_tierra;
    nombre = "Marte";
  }

else if(planeta == 2)

  {
    peso_final = peso * g_jupiter / g_tierra;
    nombre = "Jupiter";
  }

  else if(planeta == 3)

  {
    peso_final = peso * g_venus / g_tierra;
    nombre = "Venus";
  }
  else if(planeta == 4)

  {
    peso_final = peso * g_urano / g_tierra;
    nombre = "Urano";
  }
  else if(planeta == 5)

  {
    peso_final = peso * g_saturno / g_tierra;
    nombre = "Saturno";
  }
  else if(planeta == 6)

  {
    peso_final = peso * g_neptuno / g_tierra;
    nombre = "Neptuno";
  }
  else if(planeta == 7)

  {
    peso_final = peso * g_pluton / g_tierra;
    nombre = "Pluton";
  }


else
{
  peso_final = 100000;
  nombre = "krypton";
}
peso_final = parseInt(peso_final);
alert("Tu peso en " + nombre + " es " + peso_final + " kilos");