<script>
    import {
        Button,
        Icon,
    } from "svelte-doric"
    import { Dialog, Prompt, Alert } from "svelte-doric/dialog"

    let question = null
    let answer = null

    const acceptable = [
        "奇跡蜂",
        "奇跡八",
        "kiseki hachi",
    ]
    async function check() {
        const response = await question.show({
            title: "ポップクイズ",
            message: "誰か一番いい蜂？"
        })

        if (response === false) {
            return
        }

        if (acceptable.includes(response) === false) {
            return
        }

        answer.show({
            title: "正しい！",
            message: "She's 8/8 gr8 m8, would hold hands"
        })
    }
</script>

<Dialog bind:this={question} component={Prompt} persistent />
<Dialog bind:this={answer} component={Alert} />
<Button on:tap={check}>
    <Icon name="user-secret" />
</Button>
