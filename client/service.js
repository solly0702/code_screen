$(function() {

    function isValid(user_input) {
        return /^\d+$/.test(user_input)
    }

    function errorMsg(form, msg) {
        form.addClass("has-error")
        form.append("<span class='help-block'>" + msg + "</span>")
    }

    function defaultSetup(form, alert, helpBlock) {
        helpBlock.remove()
        form.removeClass("has-error")
        $(".help-block").remove()
        alert.removeClass("alert-success")
        alert.removeClass("alert-danger")
        alert.html("")
    }

    $("#proeject_form").on("submit", function(e) {
        e.preventDefault()

        var user_input = $("#user_input")
        var form = $(".form-group")
        var alert = $(".alert")
        var helpBlock = $(".help-block")

        defaultSetup(form, alert, helpBlock)

        if (!isValid(user_input.val())) {
            errorMsg(form, "<strong>Input must be positive integer!</strong> Please try again.")
        }

        $.ajax({
            url: "/api/fib",
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify({ user_input: user_input.val() }),
            success: function(res) {
                alert.addClass("alert-success").attr("hidden", false)
                alert.append("Your request of Fibonacci Sequence is <strong>" + res.payload.join(", ") + "</strong>")
                user_input.val("")
            },
            error: function(err) {
                if (err.status == 400) {
                    errorMsg(form, err.responseJSON.error)
                }
                else {
                    alert.addClass("alert-danger").attr("hidden", false)
                    alert.append("There is <strong>" + err.status + " server issue </strong>" + "Please try again later")
                }
                user_input.val("")
            }
        })

    })

});
