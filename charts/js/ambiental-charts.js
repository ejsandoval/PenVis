d3.json("data/contexto-general/ambiental/ContextoAmbiental-HuellaEcologica.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz(loaded_data,"#viz_0");
      });

      function makeViz(data,container){
        d3plus.colorContrast(["#969696", "#849BA1", "#B3B3B3", "#C8C8C8", "#9F6B7A", "#9F8655"]);
        var vis = new d3plus.LinePlot()
        .data(data)
        .tooltipConfig({
          body: function(d) {
            var table = "<table class='tooltip-table'>";
            table += "<tr><td class='title'>Año:</td><td class='data'>" + d.year + "</td></tr>";
            table += "<tr><td class='title'>Valor:</td><td class='data'>" + d.value + "</td></tr>";
            table += "</table>";
            return table;
          },
          footer: function(d) {
            return "<sub class='tooltip-footer'></sub>";
          },
          title: function(d) {
            var txt = d.type;
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();;
          }
        })
        .legendTooltip({
          title: function(d) {
            var txt = d.type;
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();;
          },
          body: function(d) {
            return null;
          }
        })
        .select(container)
        .x("year")
        .xConfig({
          title:"Año"
        })
        .y("value")
        .yDomain([3.2,4.8])
        .yConfig({
          title:"Hectáreas globales por persona"
        })
        .groupBy("type")
        .render();
      }

d3.json("data/contexto-general/ambiental/ContextoAmbiental-EmisionCO2percapita.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz1(loaded_data,"#viz_1");
      });

      function makeViz1(data,container){
        var vis = new d3plus.Plot()
        .data(data)
        .legendTooltip({
          title: function(d) {
            var txt = d.country;
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();;
          },
          body: function(d) {
            return null;
          }
        })
        .tooltipConfig({
          body: function(d) {
            var table = "<table class='tooltip-table'>";
            table += "<tr><td class='title'>Año:</td><td class='data'>" + d.year + "</td></tr>";
            table += "<tr><td class='title'>Toneladas de CO2 por habitante:</td><td class='data'>" + d.value + "</td></tr>";
            table += "</table>";
            return table;
          },
          footer: function(d) {
            return "<sub class='tooltip-footer'></sub>";
          },
          title: function(d) {
            var txt = d.country;
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();;
          }
        })
        .select(container)
        .x("year")
        .discrete("x")
        .xDomain([1990,2015])
        .xConfig({
          title:"Año"
        })
        .y("value")
        .yDomain([0,5])
        .yConfig({
          title:"En toneladas de CO2 por habitante"
        })
        /*.size(0)
        .sizeMin(0)
        .sizeMax(10)*/
        .groupBy("country")
        .render();
      }

d3.json("data/contexto-general/ambiental/ContextoAmbiental-EmisionCO2PIB.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz2(loaded_data,"#viz_2");
      });

      function makeViz2(data,container){
        var vis = new d3plus.Plot()
        .data(data)
        .legendTooltip({
          title: function(d) {
            var txt = d.country;
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();;
          },
          body: function(d) {
            return null;
          }
        })
        .tooltipConfig({
          body: function(d) {
            var table = "<table class='tooltip-table'>";
            table += "<tr><td class='title'>Año:</td><td class='data'>" + d.year + "</td></tr>";
            table += "<tr><td class='title'>Toneladas de CO2 por habitante:</td><td class='data'>" + d.value + "</td></tr>";
            table += "</table>";
            return table;
          },
          footer: function(d) {
            return "<sub class='tooltip-footer'></sub>";
          },
          title: function(d) {
            var txt = d.country;
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();;
          }
        })
        .select(container)
        .x("year")
        .discrete("x")
        .xDomain([1990,2015])
        .xConfig({
          title:"Año"
        })
        .y("value")
        .yDomain([0,1.25])
        .yConfig({
          title:"Toneladas de CO2 por cada 1.000 dólares de PIB"
        })
        /*.size(0)
        .sizeMin(0)
        .sizeMax(10)*/
        .groupBy("country")
        .render();
      }

d3.json("data/contexto-general/ambiental/ContextoAmbiental-ParticipacionpoliticaenMA.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz3(loaded_data,"#viz_3");
      });

      function makeViz3(data,container){
        var vis3 = new d3plus.BarChart()
        .data(data)
        .legendTooltip({
          title: function(d) {
            var txt = d.country;
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();;
          },
          body: function(d) {
            return null;
          }
        })
        .tooltipConfig({
          body: function(d) {
            var table = "<table class='tooltip-table'>";;
            table += "<tr><td class='title'>Año:</td><td class='data'>" + d.year + "</td></tr>";
            table += "<tr><td class='title'>Porcentaje:</td><td class='data'>" + d.value + "%</td></tr>";
            table += "</table>";
            return table;
          },
          footer: function(d) {
            return "<sub class='tooltip-footer'></sub>";
          },
          title: function(d) {
            var txt = d.activity;
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();;
          }
        })
        .select(container)
        .x("year")
        .xConfig({
          title:"Fecha"
        })
        .y("value")
        .yConfig({
          title:"porcentaje"
        })
        .groupBy("activity")
        .barPadding(5)
        .groupPadding(40)
        .render();
      }

d3.json("data/contexto-general/ambiental/ContextoAmbiental-nivelderesponsabilidadcambioclimatico.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz4(loaded_data,"#viz_4");
      });

      function makeViz4(data,container){
        var vis4 = new d3plus.BarChart()
        .data(data)
        .legendTooltip({
          title: function(d) {
            var txt = d.country;
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();;
          },
          body: function(d) {
            return null;
          }
        })
        .tooltipConfig({
          body: function(d) {
            var table = "<table class='tooltip-table'>";
            table += "<tr><td class='title'>Porcentaje:</td><td class='data'>" + d.value + "%</td></tr>";
            table += "</table>";
            return table;
          },
          footer: function(d) {
            return "<sub class='tooltip-footer'></sub>";
          },
          title: function(d) {
            var txt = d.group;
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          }
        })
        .select(container)
        .x("group")
        .xConfig({
          title:"Grupo"
        })
        .y("value")
        .yConfig({
          title:"Porcentaje de responsabilidad"
        })
        .barPadding(5)
        .groupPadding(40)
        .render();
      }

d3.json("data/contexto-general/ambiental/ContextoAmbiental-nivelderesponsabilidadsolucioncambioclimatico.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz5(loaded_data,"#viz_5");
      });

      function makeViz5(data,container){
        var vis5 = new d3plus.BarChart()
        .data(data)
        .legendTooltip({
          title: function(d) {
            var txt = d.country;
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          },
          body: function(d) {
            return null;
          }
        })
        .tooltipConfig({
          body: function(d) {
            var table = "<table class='tooltip-table'>";
            table += "<tr><td class='title'>Porcentaje:</td><td class='data'>" + d.value + "%</td></tr>";
            table += "</table>";
            return table;
          },
          footer: function(d) {
            return "<sub class='tooltip-footer'></sub>";
          },
          title: function(d) {
            var txt = d.group;
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          }
        })
        .select(container)
        .x("group")
        .xConfig({
          title:"Grupo"
        })
        .y("value")
        .yConfig({
          title:"Porcentaje de responsabilidad"
        })
        .barPadding(5)
        .groupPadding(40)
        .render();
      }

d3.json("data/contexto-general/ambiental/ContextoAmbiental-Principalesproblemasambiental2016.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz6(loaded_data,"#viz_6");
      });

      function makeViz6(data,container){
        var vis6 = new d3plus.BarChart()
        .data(data)
        .legendTooltip({
          title: function(d) {
            var txt = d.problem;
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();;
          },
          body: function(d) {
            return null;
          }
        })
        .tooltipConfig({
          body: function(d) {
            var table = "<table class='tooltip-table'>";
            table += "<tr><td class='title'>Porcentaje:</td><td class='data'>" + d.value + "%</td></tr>";
            table += "</table>";
            return table;
          },
          footer: function(d) {
            return "<sub class='tooltip-footer'></sub>";
          },
          title: function(d) {
            var txt = d.problem;
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();;
          }
        })
        .select(container)
        .x("problem")
        .xConfig({
          title:"Problema"
        })
        .y("value")
        .yConfig({
          title:"Porcentaje"
        })
        .render();
      }

d3.json("data/contexto-general/ambiental/ContextoAmbiental-Principalesproblemasambiental2018.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz7(loaded_data,"#viz_7");
      });

      function makeViz7(data,container){
        var vis7 = new d3plus.BarChart()
        .data(data)
        .legendTooltip({
          title: function(d) {
            var txt = d.problem;
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();;
          },
          body: function(d) {
            return null;
          }
        })
        .tooltipConfig({
          body: function(d) {
            var table = "<table class='tooltip-table'>";
            table += "<tr><td class='title'>Porcentaje:</td><td class='data'>" + d.value + "%</td></tr>";
            table += "</table>";
            return table;
          },
          footer: function(d) {
            return "<sub class='tooltip-footer'></sub>";
          },
          title: function(d) {
            var txt = d.problem;
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();;
          }
        })
        .select(container)
        .x("problem")
        .xConfig({
          title:"Problema"
        })
        .y("value")
        .yConfig({
          title:"Porcentaje"
        })
        .render();
      }

d3.json("data/contexto-general/ambiental/ContextoAmbiental-Respaldodemedidas.json", function(error, loaded_data) {
        if (error) return console.error(error);
        makeViz8(loaded_data,"#viz_8");
      });

      function makeViz8(data,container){
        var vis8 = new d3plus.BarChart()
        .data(data)
        .tooltipConfig({
          body: function(d) {
            var table = "<table class='tooltip-table'>";
            table += "<tr><td class='title'>Respuesta:</td><td class='data'>" + d.opinion + "</td></tr>";
            table += "<tr><td class='title'>Porcentaje:</td><td class='data'>" + d.value + "%</td></tr>";
            table += "</table>";
            return table;
          },
          footer: function(d) {
            return "<sub class='tooltip-footer'></sub>";
          },
          title: function(d) {
            var txt = d.idea;
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();;
          }
        })
        .select(container)
        .x("idea")
        .xConfig({
          title:"Idea"
        })
        .y("value")
        .yConfig({
          title:"Porcentaje %"
        })
        .groupBy("opinion")
        .render();
      }