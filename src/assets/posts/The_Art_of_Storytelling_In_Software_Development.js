import firstImage from '../images/first_post.jpeg'
import {postCardDateFormat} from "../../util/dateUtils";
import authorImg from '../images/theoxarisImg.jpeg'

export default {
    id: '1',
    title: 'The Art of Storytelling In Software Development',
    img: firstImage,
    authorName: 'George Theocharis',
    authorImg: authorImg,
    coverText: 'Software development nowadays is a complex process that while entailing many scientific aspects, it can also be seen as a form of art. Even rules and best practices aside, a piece of code will always mirror the mind, soul and creativity of the developer that created it. As such a developer can always benefit from borrowing elements and studying great masters, not only of Computer Science, but of other arts too, such as the art of storytelling. After all, a craftsman must keep honing their skills.',
    creationDate: postCardDateFormat(new Date()),
    body: [
        {
            "type": "quote",
            "data": {
                "text": "Storytelling is the most powerful way to put ideas into the world.",
                "caption": "Robert McAfee Brown",
                "alignment": "left"
            }
        },
        {
            "type": "paragraph",
            "data": {"text": "Software development nowadays is a complex process that while entailing many scientific aspects, it can also be seen as a form of art. Even rules and best practices aside, a piece of code will always mirror the mind, soul and creativity of the developer that created it. As such a developer can always benefit from borrowing elements and studying great masters, not only of Computer Science, but of other arts too, such as the art of storytelling. After all, a craftsman must keep honing their skills."}
        }, {
            "type": "paragraph",
            "data": {"text": "Programming and storytelling are very similar in nature. For example, both are expressed via written language and are means of communication (either seen as a set of instructions to a machine or as code read by a colleague). Both have rules, best practices, techniques, and structure. How can a developer though, find value from studying storytelling?"}
        }, {
            "type": "paragraph",
            "data": {"text": "A great technique in storytelling is to <b>show rather than tell</b> to your audience what a character may be feeling or experiencing. By telling, you simply inform the reader, presenting them with factual statements, while by showing, a more intimate connection is being created. A mental model of the scene and the emotions that the characters are feeling, instead of simply stating information."}
        }, {
            "type": "quote",
            "data": {
                "text": "Don’t tell me the moon is shining. Show me the glint of light on broken glass.",
                "caption": "Anton Checkhov",
                "alignment": "left"
            }
        }, {
            "type": "paragraph",
            "data": {"text": "In programming, there is a similar principle that is known as <b>Tell, Don’t</b> Ask that aims to control coupling between classes. As a good storyteller is expected to show to the audience instead of directing telling them information, a software developer can also tell (command) its objects to behave as expected instead of querying them for their internal state."}
        }, {
            "type": "paragraph",
            "data": {"text": "To explain it further, let’s see an example of a trivial but typical ask object:"}
        }, {
            "type": "code",
            "data": {"code": "public class Car {\n    private boolean lights;\n    \n    public boolean getLights() {\n        return lights;\n    }\n\n    public void setLights(boolean lights) {\n        this.lights = lights;\n    }\n}"}
        }, {
            "type": "paragraph",
            "data": {"text": "The above car class is quite simple with just a single private field, a public getter and a public setter. When the developer wants to get information about the state of the lights of the car, in order to turn them off for example, would <b>ask </b>the car instance by invoking the getter in an if statement and then proceed to set the lights off by calling the setter."}
        }, {
            "type": "paragraph",
            "data": {"text": "By following the Tell, Don’t Ask principle, we can refactor our object to the following:"}
        }, {
            "type": "code",
            "data": {"code": "public class Car {\n    \n    private boolean lights;\n\n    private boolean getLights() {\n        return lights;\n    }\n\n    private void setLights(boolean lights) {\n        this.lights = lights;\n    }\n    \n    public void turnLightsOn() {\n        if(getLights()) return;\n        setLights(true);\n    }\n\n    public void turnLightsOff() {\n        if(!getLights()) return;\n        setLights(false);\n    }\n}"}
        }, {
            "type": "paragraph",
            "data": {"text": "Now instead of asking, we can tell the object to turn the lights on or off and trust it to behave as expected. But what have we accomplished here?"}
        }, {
            "type": "paragraph",
            "data": {"text": "As developers, day in and day out, we write and read code. Actually, we might be spending more time reading than writing. By following the principle of tell, don’t ask, not only we have reduced coupling (imagine a class with actual internal dependencies and not a single lights field) but also we have added intent to our code. As a good storyteller would have done, we have expressed our intention to our fellow reader (developer) and we have created a narrative. The car object, can now be a character in a bigger picture, while the lights method can be our own version of the glint of light on the broken glass."}
        }, {
            "type": "paragraph",
            "data": {"text": "As all matters in our craft, the above technique is not appropriate to always being followed, but instead the developer should use it depending the situation at hand. On an upcoming article we will examine other ways and techniques to aid us in telling a story via our code."}
        }, {"type": "paragraph", "data": {"text": "&nbsp; Till then don’t stop creating and exploring ideas!<br>"}}]

}