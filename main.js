
// Year restriction: Minimum 18 years as current date 

        $("#birthday").datepicker({
            onSelect: function (value, ui) {
                var today = new Date();
                age = today.getFullYear() - ui.selectedYear;
                if (age < 18) {
                    $('.date_notice').html('Devi avere almeno 18 anni!');
                    $(".reg_single_submit input").addClass('not_clickable');
                } else {
                    $('.date_notice').html('');
                    $(".reg_single_submit input").removeClass('not_clickable');
                }
            },
            
            maxDate: new Date(),
            changeYear: true,
            changeMonth: true,
            yearRange: "1960:2010",
            maxDate: "-18y",
            // minDate: "-100Y",
            monthNamesShort: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
        });
